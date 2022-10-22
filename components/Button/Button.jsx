import React, { useContext } from "react";
import { Oval } from "react-loader-spinner";

export const Button = ({ label, isLoading, isFilled }) => {
  return (
    <button
      disabled={isFilled === false ? true : false}
      type="submit"
      className={`${
        isFilled === false && "buttonDisabled"
      } flex w-[fit-content] gap-x-[8px] whitespace-nowrap rounded-[8px] bg-[#009879] px-[24px] py-[20px] text-[14px] font-bold text-[#FFFFFF]`}
    >
      <div className="h-[24px]">
        <Oval
          height={24}
          width={24}
          color="#FFFFFF"
          wrapperStyle={{}}
          wrapperClass=""
          visible={isLoading}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
      {label}
    </button>
  );
};
