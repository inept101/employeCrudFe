import React, { createContext, useReducer } from "react";

import { appReducer } from "./reducer";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [appState, dispatch] = useReducer(appReducer, {
    isLoggedIn:
      typeof window !== "undefined" &&
      window.localStorage.getItem("jwt") !== null
        ? true
        : false,

    jwt:
      typeof window !== "undefined" &&
      window.localStorage.getItem("jwt") !== null
        ? window.localStorage.getItem("jwt")
        : undefined,

    userName:
      typeof window !== "undefined" &&
      window.localStorage.getItem("userName") !== null
        ? window.localStorage.getItem("userName")
        : undefined,
  });

  return (
    <UserContext.Provider value={[appState, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
