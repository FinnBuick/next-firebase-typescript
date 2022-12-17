import { createContext } from 'react';
import { User } from 'types/User';

const defaultUser: User = {
  authUser: null,
  username: null,
};

export const UserContext = createContext(defaultUser);
