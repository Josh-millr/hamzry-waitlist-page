import React, { useContext } from "react";
import { StoreContext } from "../../lib/Store";

export const Modal = () => {
  let {
    subscriptionModal,
    setSubscriptionModal,
    contactModal,
    setContactModal,
  } = useContext(StoreContext);

  const modalHandler = () => {
    if (subscriptionModal === true) setSubscriptionModal(false);
    if (contactModal === true) setContactModal(false);
  };

  return (
    <div
      onClick={() => modalHandler()}
      className={`${
        (subscriptionModal === true && "modal") ||
        (contactModal === true && "modal")
      }`}
    />
  );
};
//
