import React from "react";

export const TextInput = ({ label, placeholder, getValue }) => {
  const inputHandler = (event) => {
    event.preventDefault();
    getValue(event.target.value);
  };
  return (
    <span className="grid w-full md:max-w-[520px]">
      <span className="relative left-[20px] top-[8px] w-[fit-content] bg-[#FFFFFF] px-[8px]">
        <label for="email" className="text-[12px] font-bold text-[#6E6E6E]">
          {label}
        </label>
      </span>
      <input
        onChange={inputHandler}
        type="text"
        id="email"
        className="h-[62px] w-full max-w-[520px] rounded-[8px] border-[1px] border-[#A3A3A3] px-[16px]"
        placeholder={placeholder}
      />
    </span>
  );
};
