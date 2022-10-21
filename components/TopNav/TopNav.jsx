import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const TopNav = () => {
  let [currPath, setCurrPath] = useState("/");

  let changeRoute = (route) => setCurrPath(route);

  let routes = [
    {
      id: "1521HJN2135",
      name: "Blog",
      route: "/",
    },
    {
      id: "SADJHVA634SDA",
      name: "Contact",
      route: "/contact",
    },
  ];

  let navItems = routes.map(({ name, route, id }) => (
    <li
      key={id}
      className={`cursor-pointer ${currPath === route ? "navItemActive" : ""}`}
      onClick={() => changeRoute(route)}
    >
      <Link href={route}>{name}</Link>
    </li>
  ));

  return (
    <nav>
      <div className="flex w-full items-center justify-between py-[40px] px-[24px] sm:py-[40px] sm:px-[72px]">
        {/* Column-1 */}
        <Link href="/">
          <Image
            className="cursor-pointer"
            onClick={() => changeRoute("/")}
            src="/hamzry-logo-full.svg"
            height={34}
            width={134}
            alt="Hamzry Logo"
          />
        </Link>
        {/* Column-2 */}
        <ul className="flex gap-x-[24px] text-[14px] font-bold">{navItems}</ul>
      </div>
    </nav>
  );
};
