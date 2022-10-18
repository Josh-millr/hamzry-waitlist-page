import React from "react";

export const TextInput = () => {
  return (
    <span className="grid w-full">
      <span className="relative left-[20px] top-[8px] w-[fit-content] bg-[#FFFFFF] px-[8px]">
        <label for="email" className="text-[12px] font-bold text-[#6E6E6E]">
          Email
        </label>
      </span>
      <input
        type="text"
        id="email"
        className="h-[56px] w-full rounded-[8px] border-[1px] border-[#A3A3A3] px-[16px] outline-none focus:bg-[#e6fffa]"
        placeholder="eg. joshuae.miller100@gmail.com"
      />
    </span>
  );
};
