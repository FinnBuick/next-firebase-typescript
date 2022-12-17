import { UserContext } from "@lib/context";
import Link from "next/link";
import { useContext } from "react";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

function AuthCheck(props: Props) {
  const { username } = useContext(UserContext);

  return username
    ? props.children
    : props.fallback || <Link href="/enter">You must be signed in</Link>;
}

export default AuthCheck;
