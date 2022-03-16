import React, { useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import Banner1 from "../../../../../public/images/vendor-search/banner1.png";
import Banner2 from "../../../../../public/images/vendor-search/banner2.png";
import Banner3 from "../../../../../public/images/vendor-search/banner3.png";
import Banner4 from "../../../../../public/images/vendor-search/banner4.png";
import Banner5 from "../../../../../public/images/vendor-search/banner5.png";

const VendorSearch = () => {
  return (
    <div className="bg-bg-eunry px-5 py-12 text-white">
      <div className="w-full flex flex-col items-center">
        <p className="text-3xl">Your Vendor Search - Streamlined</p>
        <p>Pre-screened vendors ready to help your planning</p>
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
          <div data-aos="fade-left" className="mx-3 flex flex-col space-y-3">
            <div className="relative rounded-md h-24 w-80 cursor-pointer transition-all hover:scale-105">
              <Image src={Banner3} layout={"fill"} className="rounded-md" />
              <div className="flex justify-center items-center space-x-2 absolute right-2 bottom-2 transition-all hover:right-1">
                <p>Photographer</p>
                <HiOutlineArrowRight size={20} />
              </div>
            </div>
            <div className="relative rounded-md h-24 w-80 cursor-pointer transition-all hover:scale-105">
              <Image src={Banner4} layout={"fill"} className="rounded-md" />
              <div className="flex justify-center items-center space-x-2 absolute right-2 bottom-2 transition-all hover:right-1">
                <p>Flowers</p>
                <HiOutlineArrowRight size={20} />
              </div>
            </div>
            <div className="relative rounded-md h-24 w-80 cursor-pointer transition-all hover:scale-105">
              <Image src={Banner5} layout={"fill"} className="rounded-md" />
              <div className="bottom-12 flex justify-center items-center space-x-2 absolute right-2 bottom-2 transition-all hover:right-1">
                <p>Cakes & Confectionary</p>
                <HiOutlineArrowRight size={20} />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="bottom-14 relative flex justify-end items-center mt-2 space-x-2 transition-all hover:scale-110 cursor-pointer select-none">
                <p>Explore more vendors</p>
                <HiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSearch;
