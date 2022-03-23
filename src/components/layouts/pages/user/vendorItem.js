import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import LoveCalendar from "../../../../../public/icons/love-calendar.svg";
import LoveLine from "../../../../../public/icons/love-line.svg";
import PhoneCall from "../../../../../public/icons/phone-call.svg";

const VendorItem = () => {
  return (
    <div className="md:w-1/3 w-full px-2 mt-2 relative">
      <div className="bg-bg-primary rounded-full flex justify-center items-center h-10 w-10 absolute right-0 cursor-pointer text-white">
        <IoMdClose size={25} className="text-bg-eunry" />
      </div>
      <div className="w-full shadow-lg rounded-lg pb-3 mt-5">
        <div className="w-full bg-bg-eunry flex justify-center py-5 rounded-tl-lg rounded-tr-lg">
          <p className="text-white text-xl">Venue</p>
        </div>
        <div className="w-full h-56 bg-black">
          <img src="https://files.slack.com/files-pri/T01E6TUC4GM-F03829U3RM3/image.png?pub_secret=ede111819d" className="w-full h-full" />
        </div>
        <div className="w-full px-4">
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-medium">Budget</p>
              <div className="w-2/3 h-12 bg-bg-romance rounded-md">
                <input type="number" className="w-full h-full rounded-md outline-none bg-transparent px-2" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Order Amount</p>
              <div className="w-2/3 h-12 bg-bg-romance rounded-md">
                <input type="number" className="w-full h-full rounded-md outline-none bg-transparent px-2" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Payment Status</p>
              <div className="w-2/3 h-12 bg-bg-romance rounded-md relative">
                <div className="w-full h-full absolute flex items-center justify-center">
                  <p className="text-bg-eunry">50% completed</p>
                </div>
                <div style={{ width: "50%" }} className="h-full bg-bg-primary rounded-l-md"></div>
              </div>
            </div>
          </div>
          <div className="bg-bg-eunry rounded-lg flex flex-col items-center justify-center py-4 mt-3">
            <p className="text-xl text-white">Gardens Boutique Hotel</p>
            <div className="flex mt-3">
              <div className="px-3 cursor-pointer">
                <Image src={PhoneCall} height={30} width={30} />
              </div>
              <div className="px-3 cursor-pointer">
                <Image src={LoveCalendar} height={30} width={30} />
              </div>
              <div className="px-3 cursor-pointer">
                <Image src={LoveLine} height={30} width={30} />
              </div>
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="w-full h-12 outline-none border border-bg-eunry rounded-md flex items-center justify-center cursor-pointer select-none hover:opacity-70">
              <div className="w-full flex justify-center">
                <p className="ml-7 text-bg-eunry font-medium">Wedding Day</p>
              </div>
              <BsChevronDown size={25} className="mr-2 text-bg-eunry" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorItem;
