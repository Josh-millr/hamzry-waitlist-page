import React, { createContext } from "react";

let PopUpStore = createContext({
  popup: false,
  loading: false,
});

export const PopupContext = ({ children }) => {
  return (
    <PopUpStore.Provider value={PopUpStore}>{children}</PopUpStore.Provider>
  );
};
