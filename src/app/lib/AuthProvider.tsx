"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { userInfo } from "../(withoutMainLayout)/action/authAction";
type TUser = {
  email: string;
  role: string;
};

const AuthContext = createContext<any>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const fetch = async () => {
    const response = await userInfo();
    setUser(response);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
