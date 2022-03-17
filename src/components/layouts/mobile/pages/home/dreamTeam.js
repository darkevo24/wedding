import React, { useEffect } from "react";
import Image from "next/image";
import SearchIcon from "../../../../../../public/icons/search.svg";
import ListIcon from "../../../../../../public/icons/list.svg";
import CurrencyIcon from "../../../../../../public/icons/currency.svg";
import CheckedIcon from "../../../../../../public/icons/checked.svg";
import { MdSearch } from "react-icons/md";

export default function dreamTeam() {
  return (
    <div>
      <div data-aos="fade-right" className="flex md:hidden flex-col w-full space-x-2 justify-center items-center">
        <div className=" flex justify-center w-full">
          <div className="mr-5 flex flex-col space-y-2 items-center text-center w-1/4">
            <div className="rounded-full border-2 border-bg-eunry w-20 h-20 p-0.5">
              <div className="bg-bg-eunry rounded-full w-full h-full text-white flex justify-center items-center">
                <Image src={SearchIcon} width={60} height={30} />
              </div>
            </div>
            <p className="font-light">Streamlines & Highly Personalized Search</p>
          </div>
          <div className="flex flex-col space-y-2 items-center text-center w-1/4">
            <div className="rounded-full border-2 border-bg-eunry w-20 h-20 p-0.5">
              <div className="bg-bg-eunry rounded-full w-full h-full text-white flex justify-center items-center">
                <Image src={ListIcon} width={35} height={45} />
              </div>
            </div>
            <p className="font-light">Checklist to guide your planning</p>
          </div>
        </div>
        <div className=" flex flex-row justify-center w-full">
          <div className="mr-5 flex flex-col space-y-2 items-center text-center w-1/4">
            <div className="rounded-full border-2 border-bg-eunry w-20 h-20 p-0.5">
              <div className="bg-bg-eunry rounded-full w-full h-full text-white flex justify-center items-center">
                <Image src={CurrencyIcon} width={45} height={55} />
              </div>
            </div>
            <p className="font-light">Milestone payments lets you save as you go towards your wedding</p>
          </div>
          <div className="flex flex-col space-y-2 items-center text-center w-1/4">
            <div className="rounded-full border-2 border-bg-eunry w-20 h-20 p-0.5">
              <div className="bg-bg-eunry rounded-full w-full h-full text-white flex justify-center items-center">
                <Image src={CheckedIcon} width={35} height={45} />
              </div>
            </div>
            <p className="font-light">Last milestone payment held until service is delivered / performed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
