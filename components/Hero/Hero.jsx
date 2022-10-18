import React from "react";

export const Hero = () => {
  return (
    <div className="grid grid grid-cols-1 grid-rows-1 gap-y-[40px] py-[62px] px-[24px] md:grid-cols-2">
      {/* Column-1 */}
      <div className="">
        <div className="flex items-center gap-x-[8px]">
          <span className="hidden h-[1px] w-[26px] bg-[#000000] md:block" />
          <p className="text-[14px] font-bold tracking-wider">
            THE ULTIMATE GIG PLATFORM FOR NIGERIA
          </p>
          <span className=" h-[1px] w-[26px] bg-[#000000]" />
        </div>
        <h1 className="text-[40px] font-bold capitalize leading-tight tracking-tight">
          <span className="text-[#009879]">Connecting you </span>
          with GIGs worth your skills
          <span className="text-[40px] text-[#009879]">.</span>
        </h1>
      </div>
      {/* Column-2 */}
      <div className="h-[30px] bg-[#cc0066]">{/* For hero image */}</div>
    </div>
  );
};
