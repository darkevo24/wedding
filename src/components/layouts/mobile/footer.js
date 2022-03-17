import React from "react";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Logo from "../../../../public/images/logo-light.png";

const FooterMobile = () => {
  return (
    <div className="md:hidden bg-bg-primary w-full text-white items-center flex flex-col text-center py-10">
      <div className="flex items-center justify-center">
        <Image src={Logo} width={310} height={75} />
      </div>
      <div className="my-2">
        <h3>Play Your Wedding Into Reality</h3>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      <div className="my-2">
        <h3>
          <strong>Refer A Friend</strong>
        </h3>
        <p>Our story | Press | WeddingServ Reviews</p>
        <div className="flex justify-center items-center space-x-3 my-1">
          <div className="cursor-pointer">
            <BsFacebook size={25} />
          </div>
          <div className="cursor-pointer">
            <AiOutlineInstagram size={30} />
          </div>
        </div>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      <div className="my-2">
        <h3>
          <strong>Planning Tools</strong>
        </h3>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      <div className="my-2">
        <p>Plan A Wedding</p>
        <p>{"Manage Couple's Website"}</p>
        <p>Manage Guest List</p>
        <p>Inspiration</p>
        <p>Helpful Tips</p>
        <p>Track Wedding Progress</p>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      <div className="my-2">
        <h3>
          <strong>Need Some Help?</strong>
        </h3>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      <div className="my-2">
        <p>Search A Vendor</p>
        <p>{"Find Couple's Website"}</p>
        <p>FAQS</p>
        <p>Track Order</p>
        <p>Contact Us</p>
        <p>Cancellation Policy</p>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      <div className="my-2">
        <h3>
          <strong>Become A Vendor</strong>
        </h3>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      <div className="my-2">
        <p>Register of Vendor</p>
        <p>Vendor Support</p>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      <div className="my-2">
        <h3>
          <strong>Keep In Touch With Us</strong>
        </h3>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      <div className="my-2">
        <p>Email : contact@weddingserv.com</p>
        <p>Tel : +65 8282 7452</p>
        <p>Add : TBA</p>
      </div>
      <div className="w-4/5 bg-white h-0.5 my-1"></div>
      Copyright © 2022 WeddingServ
      <br></br>
      All Rights Reserved.
      <br></br>
      Privacy Policy | Terms & Conditions
    </div>
  );
};

export default FooterMobile;
