import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const TopNav = () => {
  let [currPath, setCurrPath] = useState("/");

  useEffect(() => setCurrPath(window.location.pathname), [setCurrPath]);
  console.log(currPath);
  return (
    <nav>
      <div className="flex w-full items-center justify-between py-[40px] px-[24px] sm:py-[40px] sm:px-[72px]">
        {/* Column-1 */}
        <Link href="/">
          <Image
            src="/hamzry-logo-full.svg"
            height={34}
            width={134}
            alt="Hamzry Logo"
          />
        </Link>
        {/* Column-2 */}
        <ul className="flex gap-x-[24px] text-[14px] font-bold">
          {/* // TODO: Add active and inactive state style */}
          <li>
            <Link href="">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
