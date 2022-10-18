import React from "react";

export const Button = ({ label }) => {
  return (
    <button
      type="submit"
      className="w-[fit-content] whitespace-nowrap rounded-[8px] bg-[#009879] px-[32px] py-[20px] text-[14px] font-bold text-[#FFFFFF]"
    >
      {label}
    </button>
  );
};
