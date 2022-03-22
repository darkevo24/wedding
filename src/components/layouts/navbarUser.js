import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import LoveBook from "../../../public/icons/love-book.svg";
import Newspaper from "../../../public/icons/newspaper.svg";
import List from "../../../public/icons/list.svg";
import Persons from "../../../public/icons/persons.svg";
import Ring from "../../../public/icons/ring.svg";

const NavbarUser = () => {
  const route = useRouter();
  const currentRoute = route.pathname;

  return (
    <div className="w-full px-2 md:px-10 bg-bg-eunry text-white h-20">
      <div className="flex h-full overflow-x-auto space-x-8">
        <div
          onClick={() => route.push("/user/my-wedding")}
          className={
            "flex-shrink-0 md:flex-shrink  h-full w-32 md:w-1/6 space-y-1 flex flex-col items-center justify-center cursor-pointer " +
            (currentRoute.includes("my-wedding") && "border-b-2 border-bg-primary pt-0.5")
          }
        >
          <Image src={Ring} width={30} height={30} />
          <p>My Wedding</p>
        </div>
        <div
          className={
            "flex-shrink-0 md:flex-shrink  h-full w-32 md:w-1/6 space-y-1 flex flex-col items-center justify-center cursor-pointer " +
            (currentRoute.includes("checklist") && "border-b-2 border-bg-primary pt-0.5")
          }
        >
          <Image src={List} width={30} height={30} />
          <p>Checklist</p>
        </div>
        <div
          onClick={() => route.push("/user/vendor-management")}
          className={
            "flex-shrink-0 md:flex-shrink  h-full w-32 md:w-1/6 space-y-1 flex flex-col items-center justify-center cursor-pointer " +
            (currentRoute.includes("vendor-management") && "border-b-2 border-bg-primary pt-0.5")
          }
        >
          <Image src={LoveBook} width={30} height={30} />
          <p>Vendor Manager</p>
        </div>
        <div
          onClick={() => route.push("/user/guest-list")}
          className={
            "flex-shrink-0 md:flex-shrink  h-full w-32 md:w-1/6 space-y-1 flex flex-col items-center justify-center cursor-pointer " +
            (currentRoute.includes("guest-list") && "border-b-2 border-bg-primary pt-0.5")
          }
        >
          <Image src={Persons} width={30} height={30} />
          <p>Guest List</p>
        </div>
        <div
          onClick={() => route.push("/user/wedding-website")}
          className={
            "flex-shrink-0 md:flex-shrink  h-full w-32 md:w-1/6 space-y-1 flex flex-col items-center justify-center cursor-pointer " +
            (currentRoute.includes("wedding-website") && "border-b-2 border-bg-primary pt-0.5")
          }
        >
          <Image src={Newspaper} width={30} height={30} />
          <p>Wedding Website</p>
        </div>
        <div
          className={
            "flex-shrink-0 md:flex-shrink  h-full w-32 md:w-1/6 space-y-1 flex flex-col items-center justify-center cursor-pointer " +
            (currentRoute.includes("messages") && "border-b-2 border-bg-primary pt-0.5")
          }
        >
          <Image src={Newspaper} width={30} height={30} />
          <p>Messages</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
