import Head from "next/head";
import React from "react";
import Image from "next/image";
import preview from "../../../public/images/preview.png"

const VendorManagement = () => {
  return (
    <>
      <Head>
        <title>WeddingPlatform | User - Wedding Website</title>
      </Head>
      <div className="">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full">
        <div className="p-5 flex justify-center items-center w-full ">
          <Image src={preview}>
          </Image>
        </div>
        <div className=" text-xl flex items-center justify-center p-5">
            <p className="text-bg-primary font-bold">Full Preview</p>
            <div style={{ backgroundColor : "#4A4949" }} className="w-0.5 h-5 mx-2"></div>
            <p className="font-bold" style={{ color : "#4A4949" }}>Gird Preview</p>
        </div>
        </div>

        <div style={{ backgroundColor : "#F5F1EA" }} className="p-10 w-full text-bg-primary flex flex-col justify-center items-center">
          <p className="text-3xl">Great choice. Claire!</p>
          <p className="text-3xl">Who are you marrying?</p>
          <div style={{ backgroundColor : "#AAAAAA" }} className="w-full h-0.5 mt-32">
        </div>
        <div style={{ backgroundColor : "#AAAAAA" }} className="w-full h-0.5 mt-32">
        </div>
        <div className="w-full bg-bg-primary text-white h-12 flex justify-center items-center mt-10">
          <p className="font-bold text-xl">Create My Website</p>
        </div>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default VendorManagement;
