import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const TopNav = () => {
  let [currPath, setCurrPath] = useState("/");

  let changeRoute = (route) => {
    setCurrPath(route);
  };
  console.log(currPath);
  return (
    <nav>
      <div className="flex w-full items-center justify-between py-[40px] px-[24px] sm:py-[40px] sm:px-[72px]">
        {/* Column-1 */}
        <Link href="/">
          <Image
            onClick={() => changeRoute("/")}
            src="/hamzry-logo-full.svg"
            height={34}
            width={134}
            alt="Hamzry Logo"
          />
        </Link>
        {/* Column-2 */}
        <ul className="flex gap-x-[24px] text-[14px] font-bold">
          {/* // TODO: Add active and in-active state style */}
          <li>
            <Link href="">Blog</Link>
          </li>
          <li
            className=""
            onClick={() => changeRoute("/contact")}
            style={{ color: currPath === "/contact" && "#009879" }}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
