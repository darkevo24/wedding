import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import Banner1 from "../../../../../public/images/vendor-search/banner1.png";
import Banner2 from "../../../../../public/images/vendor-search/banner2.png";
import Ribbon from "../../../../../public/images/ribbon.png";

const VendorSearch = () => {
  return (
    <>
      <div className="bg-bg-romance pt-10 relative">
        <div className="absolute top-0 left-5 w-40 h-40">
          <Image src={Ribbon} layout="fill" />
        </div>
        <div className="bg-bg-eunry px-5 py-12 text-white">
          <div className="w-full flex flex-col items-center">
            <p className="text-3xl text-center">Your Vendor Search - Streamlined</p>
            <p className="text-center">Pre-screened vendors ready to help your planning</p>
            <div className="flex flex-col lg:flex-row mt-7 justify-center">
              <div data-aos="fade-right">
                <div className="mx-3 cursor-pointer transition-all hover:scale-105 max-w-screen my-2 lg:my-0">
                  <div className="h-80 w-72 rounded-t-md relative ">
                    <Image src={Banner1} layout={"fill"} />
                  </div>
                  <div className="w-72 bg-bg-primary hover:bg-bg-primary-darker flex justify-center items-center py-2 space-x-2">
                    <p>Venue</p>
                    <HiOutlineArrowRight size={20} />
                  </div>
                </div>
              </div>
              <div data-aos="fade-right">
                <div className="mx-3 cursor-pointer transition-all hover:scale-105 my-2 lg:my-0">
                  <div className="h-80 w-72 rounded-t-md relative">
                    <Image src={Banner2} layout={"fill"} />
                  </div>
                  <div className="w-72 bg-bg-primary hover:bg-bg-primary-darker flex justify-center items-center py-2 space-x-2">
                    <p>Dress & Attires</p>
                    <HiOutlineArrowRight size={20} />
                  </div>
                </div>
              </div>
              <div id="visible" data-aos="fade-left" className="hidden lg:flex mx-3 flex-col space-y-3">
                <div className="relative rounded-md h-24 w-80 cursor-pointer transition-all hover:scale-105 bg-bg-vendor-section1 bg-cover object-cover bg-center">
                  <div className="flex justify-center items-center space-x-2 absolute right-2 bottom-2 transition-all hover:right-1">
                    <p>Photographer</p>
                    <HiOutlineArrowRight size={20} />
                  </div>
                </div>
                <div className="relative rounded-md h-24 w-80 cursor-pointer transition-all hover:scale-105 bg-bg-vendor-section2 bg-cover object-cover bg-center">
                  <div className="flex justify-center items-center space-x-2 absolute right-2 bottom-2 transition-all hover:right-1">
                    <p>Flowers</p>
                    <HiOutlineArrowRight size={20} />
                  </div>
                </div>
                <div className="relative rounded-md h-24 w-80 cursor-pointer transition-all hover:scale-105 bg-bg-vendor-section3 bg-cover object-cover bg-center">
                  <div className=" flex justify-center items-center space-x-2 absolute right-2 bottom-2 transition-all hover:right-1">
                    <p>Cakes & Confectionary</p>
                    <HiOutlineArrowRight size={20} />
                  </div>
                </div>
                <div id="explore" className="w-full flex justify-end">
                  <div className=" relative flex justify-end items-center mt-2 space-x-2 transition-all hover:scale-110 cursor-pointer select-none">
                    <p>Explore more vendors</p>
                    <HiOutlineArrowRight size={20} />
                  </div>
                </div>
              </div>
              <div className="w-full justify-center flex lg:hidden">
                <div className="relative flex justify-center items-center mt-2 space-x-2 transition-all hover:scale-110 cursor-pointer select-none">
                  <p>Explore more vendors</p>
                  <HiOutlineArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorSearch;
