import React from "react";
import Image from "next/image";
import Laptop from "../../../../../public/images/laptop.png";
import Love from "../../../../../public/icons/love.svg";

const OwnCouple = () => {
  return (
    <div className="bg-bg-serenade text-bg-primary">
      <div className="w-full flex">
        <div className="w-1/2 flex justify-center py-20">
          <div data-aos="fade-right" style={{ height: "40vh", width: "75%" }} className="relative">
            <Image src={Laptop} layout="fill" />
          </div>
        </div>
        <div className="w-1/2 py-5 px-16 flex flex-col justify-center items-start">
          <p className="text-3xl">Your Very Own Couple Website</p>
          <div className="mt-10 space-y-3">
            <div className="flex items-center space-x-2">
              <Image src={Love} width={20} height={20} />
              <p>Find the design that matches your wedding style</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={Love} width={20} height={20} />
              <p>Quick and easy to customize with photos and all info for the guests</p>
            </div>
          </div>
          <div className="mt-10">
            <button className="bg-bg-primary text-white px-8 py-2 rounded-lg hover:opacity-70">Create Website</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnCouple;
