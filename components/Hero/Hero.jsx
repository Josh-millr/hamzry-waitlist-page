import React, { useState, useEffect } from "react";
import Image from "next/image";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { TextInput } from "../TextInput/TextInput";
import { Button } from "../Button/Button";

export const Hero = () => {
  let [emailValue, setEmailValue] = useState("");
  const MAILCHIP_URL = process.env.MAILCHIP_URL;

  const getInputValue = (value) => {
    setEmailValue(value);
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
          <h1 className="max-w-[638px] text-[40px] font-bold capitalize leading-tight tracking-tight md:text-[52px]">
            <span className="text-[#009879]">Connecting you </span>
            with GIGs worth your skills
            <span className="text-[40px] text-[#009879]">.</span>
          </h1>
        </div>
        <div className="grid place-items-center gap-y-[32px]">
          {/* Subscription Form */}
          <MailchimpSubscribe
            url={MAILCHIP_URL}
            render={({ subscribe, status, message }) => {
              console.log("The status is:", status);
              console.log("The message is:", message);
              return (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    subscribe(emailValue);
                  }}
                  className="grid w-full place-items-center items-end gap-y-[16px] sm:flex sm:gap-x-[16px]"
                >
                  <TextInput
                    getValue={getInputValue}
                    label="Email Address"
                    placeholder="eg. joshuae.miller100@gmail.com"
                  />
                  <Button label="Join the Waitlist" />
                </form>
              );
            }}
          />

          <p className="w-[229px] text-center text-[14px] text-[#666666] sm:w-[fit-content]">
            Join the waitlist to get get notified when we launch
          </p>
        </div>
      </div>

      {/* Column-2 */}
      <div className="flex justify-center md:justify-start">
        {/* Mobile Specific Image */}
        <span className="block sm:hidden">
          <Image src="/hamzry-mobile.svg" width={292} height={401} alt="" />
        </span>
        {/* Desktop Specific Image */}
        <span className="hidden sm:block">
          <Image src="/Hero-Image.svg" width={546} height={452} alt="" />
        </span>
      </div>
      {/* Background Text Decoration */}
      <div className="absolute top-[400px] left-[-280px] z-[-10] rotate-90 sm:top-[100px] sm:left-[auto] sm:right-[auto] sm:rotate-0">
        <h1 className="whitespace-nowrap text-[168px] leading-none opacity-[0.02] md:text-[220px]">
          FOR NIGERIA
        </h1>
        <h1 className="whitespace-nowrap text-[168px] leading-none opacity-[0.02] md:text-[220px]">
          FOR NIGERIA
        </h1>
      </div>
    </div>
  );
};
