import React, { useContext } from "react";
import Images from "next/image";

import { StoreContext } from "../../lib/Store";

export const SubscriptionPopup = () => {
  let { showModal, setShowModal } = useContext(StoreContext);
  const modalHandler = () => setShowModal(false);
  // hidePopup  h-[270px] w-[327px]
  return (
    <div
      onClick={() => modalHandler()}
      className={`${showModal === true ? "popupWrapper" : "hidePopup"}`}
    >
      <div className="grid grid-cols-1 grid-rows-1 place-items-center gap-y-[16px] rounded-[16px] bg-white px-[34px] py-[62px]">
        {/* Column 1 */}
        <div className="flex justify-center">
          <Images src="/tick.svg" height={52} width={52} alt="tick icon" />
        </div>
        {/* Column 2 */}
        <div className="grid grid-cols-1 grid-rows-1 items-center justify-center text-center text-[#000000]">
          <h2 className="text-[16px]">Thank you for joining our waitlist</h2>
          <p className="max-w-[232px] text-[14px]">
            You wll be the first to know when we go live
          </p>
        </div>
      </div>
    </div>
  );
};
export const ContactPopup = () => {
  return <div className="">Contact Popup</div>;
};
