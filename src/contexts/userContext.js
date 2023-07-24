import { createContext, useState } from 'react';
import useLocalStorage from '../shared/hooks/useLocalStorage';

export const defaultContext = {
  user: {},
  setUser: () => {},
  isLoggedIn: false,
};

export const UserContext = createContext(defaultContext);

export const UserContextProvider = ({ children }) => {
  // const { retrieveItem } = useLocalStorage(); TODO PERSIST AUTH
  const [user, setUser] = useState();
  const isLoggedIn = user ? true : false;

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
