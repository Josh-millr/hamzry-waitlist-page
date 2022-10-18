import React from "react";
import Image from "next/image";
import Link from "next/link";

export const TopNav = () => {
  return (
    <nav>
      <div className="flex w-full items-center justify-between py-[24px] px-[24px] sm:py-[40px] sm:px-[72px]">
        {/* Column-1 */}
        <Image
          src="/hamzry-logo-full.svg"
          height={34}
          width={134}
          alt="Hamzry Logo"
        />
        {/* Column-2 */}
        <ul className="flex gap-x-[24px] text-[14px] font-bold">
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
