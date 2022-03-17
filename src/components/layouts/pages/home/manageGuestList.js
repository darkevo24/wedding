import React from "react";
import Image from "next/image";
import Envelope from "../../../../../public/images/envelope.png";
import Love from "../../../../../public/icons/love.svg";

const ManageGuestList = () => {
  return (
    <div className="bg-bg-romance text-bg-primary">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center">
        <div className="w-full py-5 px-16 flex flex-col justify-center">
          <p className="text-3xl">Easily Manage Guest List</p>
          <div className="mt-10 space-y-3">
            <div className="flex items-center space-x-2">
              <Image src={Love} width={20} height={20} />
              <p>Build Guest List</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={Love} width={20} height={20} />
              <p>Collect Guests mailing address</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={Love} width={20} height={20} />
              <p>Tracks RSVPs, Dietary Requirements, Seating Plan and more</p>
            </div>
          </div>
          <div className="mt-10">
            <button className="bg-bg-primary text-white px-8 py-2 rounded-lg hover:opacity-70">Manage Guest List</button>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div data-aos="fade-right" style={{ height: "80vh", width: "90%" }} className="relative">
            <Image className="object-contain" src={Envelope} layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageGuestList;
