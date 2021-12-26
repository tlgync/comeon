import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
};

interface IUser {
    avatar: string
    event: string
    name: string
}

export type AuthContextState = {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>
  isAuth: boolean
  setIsAuth: Dispatch<SetStateAction<boolean>>
};

const contextDefaultValues: AuthContextState = {
  user: {
    avatar: '',
    event: '',
    name: '',
  },
  setUser: () => {},
  isAuth: false,
  setIsAuth: () => {},
};
const AuthContext = React.createContext<AuthContextState>(contextDefaultValues);
const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>({});
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    const newUserStorage = userStorage && JSON.parse(userStorage);
    if (newUserStorage) {
      setIsAuth(true);
      setUser(newUserStorage);
    }
  }, []);

  return <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthConsumer, AuthProvider };
