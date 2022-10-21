import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

export function Store({ children }) {
  let [loading, setLoading] = useState(false);
  
  let [subscriptionModal, setSubscriptionModal] = useState(false);
  let [contactModal, setContactModal] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        loading,
        setLoading,
        subscriptionModal,
        setSubscriptionModal,
        contactModal,
        setContactModal,
      }}
    >
      <div>{children}</div>
    </StoreContext.Provider>
  );
}
