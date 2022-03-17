import React from "react";
import {AiOutlineUp} from "react-icons/ai";
import {AiOutlineDown} from "react-icons/ai";

const FaqVendor = () => {
  return (
    <div className="w-full bg-bg-serenade px-10 py-10 text-bg-primary">
      <p className="text-3xl">FAQs</p>
      <br></br>
      <div className="w-full h-0.5 bg-bg-primary">
      </div>
      <br></br>
      <div className="flex items-center relative">
        <p className="text-bg-primary text-xl font-bold">WHAT IS A VENDOR'S REGISTRATION FORM?</p>
      <AiOutlineUp className="ml-auto block"/>
      </div> 
      <br></br>
      <div>
        <p className="text-black">A vendor registration form is a way to collect information about potential vendors to register them as partners or collaborators for a particular event</p>
        </div>
        <br></br>
        <div className="w-full h-0.5 bg-bg-primary">
      </div> 
      <br></br>
      <div className="flex items-center relative">
        <p className="text-black text-xl font-bold">WHAT IS A VENDOR'S REGISTRATION FORM?</p>
      <AiOutlineDown className="ml-auto block "/>
      </div> 
    </div>
  );
};

export default FaqVendor;
