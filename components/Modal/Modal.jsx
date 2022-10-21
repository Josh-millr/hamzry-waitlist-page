import React, { useContext } from "react";
import { StoreContext } from "../../lib/Store";

export const Modal = () => {
  let { showModal, setShowModal } = useContext(StoreContext);
  const modalHandler = () => setShowModal(false);

  return (
    <div
      onClick={() => modalHandler()}
      className={`${showModal === true && "modal"}`}
    />
  );
};
