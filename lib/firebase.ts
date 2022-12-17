import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { collection, CollectionReference, DocumentData, getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';
import { User } from 'types/User';

const DEFAULT_REGION = 'australia-southeast1';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyAeom06JQOsmGKLQT-udM3HvAYwsUresbw',
  authDomain: 'nextfire-39c0f.firebaseapp.com',
  projectId: 'nextfire-39c0f',
  storageBucket: 'nextfire-39c0f.appspot.com',
  messagingSenderId: '354519647530',
  appId: '1:354519647530:web:ee6b9e3f38bfe9cc13ca53',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(firebaseApp);
export const storage = getStorage();
export const functions = getFunctions(firebaseApp, DEFAULT_REGION);
export default firebaseApp;

// This is just a helper to add the type to the db responses
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

// export all your collections
export const usersCol = createCollection<User>('users');
