import Image from "next/image";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Logo from "../../../public/images/logo-light.png";
import FooterMobile from "./mobile/footer";

const Footer = () => {
  return (
    <div>
      <div className="hidden md:block bg-bg-primary w-full px-5 py-2 text-white">
        <div className="flex justify-between mt-5">
          <div className="flex items-center ml-12">
            <Image src={Logo} width={310} height={75} />
          </div>
          <div>
            <p className="font-bold text-right cursor-pointer">Refer A Friend</p>
            <div className="flex space-x-2">
              <p className="font-thin cursor-pointer hover:underline">Our Story</p>
              <div className="border-r border-gray-400 border-opacity-20"></div>
              <p className="font-thin cursor-pointer hover:underline">Press</p>
              <div className="border-r border-gray-400 border-opacity-20"></div>
              <p className="font-thin cursor-pointer hover:underline">WeddingServ Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <div>
            <p className="text-lg">Plan Your Wedding into Reality!</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="cursor-pointer">
              <BsFacebook size={25} />
            </div>
            <div className="cursor-pointer">
              <AiOutlineInstagram size={30} />
            </div>
          </div>
        </div>
        <div className="flex w-full mt-2">
          <div className="border-y-0.5 border-r-0.5 border-gray-400 border-opacity-20 w-1/4">
            <div className="border-b-0.5 border-gray-400 border-opacity-20 flex py-2 pl-10">
              <p className="font-semibold">Planning Tools</p>
            </div>
            <div className="flex flex-col py-2 font-thin pl-10">
              <p className="cursor-pointer hover:underline">Plan A Wedding</p>
              <p className="cursor-pointer hover:underline">Manage Couple’s Website</p>
              <p className="cursor-pointer hover:underline">Manage Guest List</p>
              <p className="cursor-pointer hover:underline">Inspiration</p>
              <p className="cursor-pointer hover:underline">Helpful Tips</p>
              <p className="cursor-pointer hover:underline">Track Wedding Progress</p>
            </div>
          </div>
          <div className="border-y-0.5 border-r-0.5 border-gray-400 border-opacity-20 w-1/4">
            <div className="border-b-0.5 border-gray-400 border-opacity-20 flex py-2 pl-10">
              <p className="font-semibold">Need Help?</p>
            </div>
            <div className="flex flex-col py-2 font-thin pl-10">
              <p className="cursor-pointer hover:underline">Search A Vendor</p>
              <p className="cursor-pointer hover:underline">Find Couple’s Website</p>
              <p className="cursor-pointer hover:underline">FAQs</p>
              <p className="cursor-pointer hover:underline">Track Order</p>
              <p className="cursor-pointer hover:underline">Contact Us</p>
              <p className="cursor-pointer hover:underline">Cancellation Policy</p>
            </div>
          </div>
          <div className="border-y-0.5 border-r-0.5 border-gray-400 border-opacity-20 w-1/4">
            <div className="border-b-0.5 border-gray-400 border-opacity-20 flex py-2 pl-10">
              <p className="font-semibold">Become A Vendor</p>
            </div>
            <div className="flex flex-col py-2 font-thin pl-10">
              <p className="cursor-pointer hover:underline">Register as Vendor</p>
              <p className="cursor-pointer hover:underline">Vendor Support</p>
            </div>
          </div>
          <div className="border-y-0.5 border-gray-400 border-opacity-20 w-1/4">
            <div className="border-b-0.5 border-gray-400 border-opacity-20 flex py-2 pl-10">
              <p className="font-semibold">Keep In Touch With Us</p>
            </div>
            <div className="flex flex-col py-2 font-thin pl-10">
              <p className="cursor-pointer">Email: contact@weddingserv.com</p>
              <p className="cursor-pointer">Tel: +65 8282 7452</p>
              <p className="cursor-pointer">Add: TBA</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <p className="font-thin text-sm text-gray-300">Copyright © 2022 WeddingServ. All Rights Reserved. Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
      <FooterMobile></FooterMobile>
    </div>
  );
};

export default Footer;
