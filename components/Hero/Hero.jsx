import React from "react";
import Image from "next/image";

import { TextInput } from "../TextInput/TextInput";
import { Button } from "../Button/Button";

export const Hero = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 grid-rows-1 px-[24px] md:px-[72px] lg:grid-cols-2">
      {/* Column-1 */}
      <div className="grid grid-cols-1 grid-rows-1 gap-y-[40px] py-[62px] md:gap-y-[46px]">
        <div className="">
          <div className="flex items-center gap-x-[8px]">
            <span className="hidden h-[1px] w-[26px] bg-[#000000] md:block" />
            <h4 className="text-[12px] font-bold tracking-widest">
              THE ULTIMATE GIG PLATFORM FOR NIGERIA
            </h4>
            <span className=" h-[1px] w-[26px] bg-[#000000]" />
          </div>
          <h1 className="max-w-[638px] text-[40px] font-bold capitalize leading-tight tracking-tight">
            <span className="text-[#009879]">Connecting you </span>
            with GIGs worth your skills
            <span className="text-[40px] text-[#009879]">.</span>
          </h1>
        </div>
        <div className="grid place-items-center gap-y-[32px]">
          <form
            onSubmit={formHandler}
            className="grid w-full place-items-center items-end gap-y-[16px] sm:flex sm:gap-x-[16px]"
          >
            <TextInput />
            <Button label="Join the Waitlist" />
          </form>
          <p className="w-[229px] text-center text-[14px] text-[#666666] sm:w-[fit-content]">
            Join the waitlist to get get notified when we launch
          </p>
        </div>
      </div>

      {/* Column-2 */}
      <div className="justify-content-center flex md:justify-start">
        <Image
          src="/Hero-Image.png"
          height={34}
          width={134}
          alt="Hamzry Logo"
        />
        {/* <Image
          src="/heroImageMobile.png"
          width={292}
          height={401}
          alt=""
          className="block md:hidden"
        /> */}
      </div>
    </div>
  );
};
