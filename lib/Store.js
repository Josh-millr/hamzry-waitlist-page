import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

export function Store({ children }) {
  let [loading, setLoading] = useState(false);
  let [showModal, setShowModal] = useState(true);

  return (
    <StoreContext.Provider
      value={{ loading, setLoading, showModal, setShowModal }}
    >
      <div>{children}</div>
    </StoreContext.Provider>
  );
}
