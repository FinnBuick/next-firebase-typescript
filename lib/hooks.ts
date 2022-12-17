import { auth, usersCol } from "@lib/firebase";
import {
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "types/User";

// Custom hook to read auth record and user profile doc
export function useUserData(): User {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState<string | null>();

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = doc(usersCol, user.uid);
      unsubscribe = onSnapshot(ref, (doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { authUser: user, username };
}
