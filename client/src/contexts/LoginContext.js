import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const initialLogginStatus = () => {
    return (
      JSON.parse(localStorage.getItem("loggedIn")) || {
        isLoggedIn: false,
        name: "Guest",
      }
    );
  };
  const [loggedInStatus, setLoginStatus] = useState(initialLogginStatus);

  return (
    <LoginContext.Provider value={[loggedInStatus, setLoginStatus]}>
      {children}
    </LoginContext.Provider>
  );
};
