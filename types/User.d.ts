import { User } from 'firebase/auth';

export type User = {
  authUser: User | null | undefined;
  username: string | null | undefined;
};
