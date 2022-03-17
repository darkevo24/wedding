import React from "react";
import Image from "next/image";
import Gift from "../../../../../public/images/gift.png";
import Love from "../../../../../public/icons/love-light.svg";

const PlanWedding = () => {
  return (
    <div className="bg-bg-primary text-white">
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-1/2 py-5 px-16 flex flex-col justify-center">
          <p className="text-3xl">Plan That Perfect Wedding</p>
          <div className="mt-10 space-y-3">
            <div className="flex items-center space-x-2">
              <Image src={Love} width={20} height={20} />
              <p>Comprehensive To Do List and Work in Progress</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={Love} width={20} height={20} />
              <p>Track, Communicate and Make Vendor Appointments online</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={Love} width={20} height={20} />
              <p>Track Budget, View Milestone Payment Progress</p>
            </div>
          </div>
          <div className="mt-10">
            <button className="bg-bg-eunry text-white px-8 py-2 rounded-lg hover:opacity-70">Start Planning</button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div data-aos="fade-right" style={{ height: "70vh", width: "100%" }} className="relative">
            <Image src={Gift} layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanWedding;
