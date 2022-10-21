import React from "react";

export const TextArea = ({ label, placeholder, getValue, value }) => {
  const inputHandler = (event) => getValue(event.target.value);
  return (
    <span className="grid w-full md:max-w-[520px]">
      <span className="relative left-[20px] top-[8px] w-[fit-content] bg-[#FFFFFF] px-[8px]">
        <label for="message" className="text-[12px] font-bold text-[#6E6E6E]">
          {label}
        </label>
      </span>
      <textarea
        onChange={inputHandler}
        type="text"
        id="message"
        value={value}
        className="h-[120px] w-full max-w-[520px] rounded-[8px] border-[1px] border-[#A3A3A3] py-[16px] px-[16px]"
        placeholder={placeholder}
      />
    </span>
  );
};
