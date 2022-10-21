import React, { useContext } from "react";
import Images from "next/image";

import { StoreContext } from "../../lib/Store";

export const SubscriptionPopup = () => {
  let { subscriptionModal, setSubscriptionModal } = useContext(StoreContext);
  const modalHandler = () => setSubscriptionModal(false);

  return (
    <div
      onClick={() => modalHandler()}
      className={`${subscriptionModal === true ? "popupWrapper" : "hidePopup"}`}
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
  let { contactModal, setContactModal } = useContext(StoreContext);
  const modalHandler = () => setContactModal(false);

  return (
    <div
      onClick={() => modalHandler()}
      className={`${contactModal === true ? "popupWrapper" : "hidePopup"} popupWrapper`}
    >
      <div className="grid grid-cols-1 grid-rows-1 place-items-center gap-y-[16px] rounded-[16px] bg-white px-[34px] py-[62px]">
        {/* Column 1 */}
        <div className="flex justify-center">
          <Images src="/tick.svg" height={52} width={52} alt="tick icon" />
        </div>
        {/* Column 2 */}
        <div className="grid grid-cols-1 grid-rows-1 items-center justify-center text-center text-[#000000]">
          <h2 className="text-[16px]">Sent Successfully</h2>
          <p className="max-w-[232px] text-[14px]">
            Thank you! we will get back to you as soon as possible
          </p>
        </div>
      </div>
    </div>
  );
};
