import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedInStatus, setLoginStatus] = useState({
    isLoggedIn: false,
    name: "Guest",
  });

  return (
    <LoginContext.Provider value={[loggedInStatus, setLoginStatus]}>
      {children}
    </LoginContext.Provider>
  );
};
