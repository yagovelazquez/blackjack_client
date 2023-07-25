import { createContext, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { userClient } from '../client/user/userClient';
import { cacheKeys } from '../config/config';

export const defaultContext = {
  user: {},
  setUser: () => {},
  isLoggedIn: false,
};

export const UserContext = createContext(defaultContext);

export const UserContextProvider = ({ children }) => {
  // const { retrieveItem } = useLocalStorage(); TODO PERSIST AUTH

  const [user, setUser] = useState();
  const isLoggedIn = useMemo(() => user ? true : false, [user]);
  useQuery(
    [cacheKeys.user],
    () => userClient.getUser({ accessToken: user.accessToken }),
    {
      enabled: isLoggedIn,
      initialData: user,
      onSuccess: (data) => {
        setUser({ accessToken: user.accessToken, ...data.data });
      },
    }
  );

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
