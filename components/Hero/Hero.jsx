import React from "react";
import { TextInput } from "../TextInput/TextInput";

export const Hero = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid">
      {/* Column-1 */}
      <div className="grid grid-cols-1 grid-rows-1 gap-y-[40px] py-[62px] px-[24px]">
        <div className="">
          <div className="flex items-center gap-x-[8px]">
            <span className="hidden h-[1px] w-[26px] bg-[#000000] md:block" />
            <h4 className="text-[12px] font-bold tracking-widest">
              THE ULTIMATE GIG PLATFORM FOR NIGERIA
            </h4>
            <span className=" h-[1px] w-[26px] bg-[#000000]" />
          </div>
          <h1 className="text-[40px] font-bold capitalize leading-tight tracking-tight">
            <span className="text-[#009879]">Connecting you </span>
            with GIGs worth your skills
            <span className="text-[40px] text-[#009879]">.</span>
          </h1>
        </div>
        <div className="grid place-items-center gap-y-[32px]">
          <form
            onSubmit={formHandler}
            className="grid place-items-center gap-y-[16px]"
          >
            <TextInput />
            <button
              type="submit"
              className="w-[fit-content] rounded-[8px] bg-[#009879] px-[32px] py-[16px] text-[14px] font-bold text-[#FFFFFF]"
            >
              Join the Waitlist
            </button>
          </form>
          <p className="max-w-[229px] text-center text-[14px] text-[#666666]">
            Join the waitlist to get get notified when we launch
          </p>
        </div>
      </div>

      {/* Column-2 */}
      <div className="">{/* For hero image */}</div>
    </div>
  );
};
