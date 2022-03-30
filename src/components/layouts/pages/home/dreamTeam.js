import React, { useEffect } from "react";
import Image from "next/image";
import SearchIcon from "../../../../../public/icons/search.svg";
import Flower from "../../../../../public/images/flower3.png";
import ListIcon from "../../../../../public/icons/list.svg";
import CurrencyIcon from "../../../../../public/icons/currency.svg";
import CheckedIcon from "../../../../../public/icons/checked.svg";
import { MdSearch } from "react-icons/md";
import DreamTeamMobile from "../../mobile/pages/home/dreamTeam";

const DreamTeam = () => {
  useEffect(() => {
    //
  }, []);

  return (
    <div className="bg-bg-romance px-10 py-16 text-bg-primary relative">
      <div className="absolute right-28 top-0">
        <Image src={Flower} height={300} width={330} />
      </div>
      <div className="w-full flex flex-col items-center ">
        <div className="flex flex-col items-center z-10">
          <p className="font-cagily text-3xl">Find Your Dream Team</p>
          <div className="flex flex-col items-center mt-2">
            <p className="font-cagily">Streamline your search of pre-screened vendors with highly personalized preferences.</p>
            <p className="font-cagily">Handpicked recs in your style, budget, availability and more.</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-5">
          <div className="bg-white h-10 flex items-center rounded-md md:w-1/2 w-full z-10">
            <form className="w-full h-full md:flex items-center">
              <div className="md:w-1/2 w-full h-full flex items-center justify-center border-r border-r-bg-soapstone select-none">
                <p>Wedding Vendor</p>
              </div>
              <div className="md:w-1/2 md:mt-0 mt-2 w-full flex h-full bg-white">
                <input className="bg-transparent w-full outline-none px-2 text-center" type="text" placeholder="Region / Area" required />
                <button type="submit" className="bg-bg-primary text-white px-2 h-full rounded-tr-md rounded-br-md">
                  <MdSearch size={25} />
                </button>
              </div>
            </form>
          </div>
          <div className="md:mt-2 mt-14 z-10">
            <p className="font-light text-sm">Wedding Venues, Photographers, DJs,Hair & Makeup, Planners, Caterers, Florists and more</p>
          </div>
        </div>
        <div className="border-t-0.5 border-bg-soapstone w-11/12 my-10"></div>
        <div data-aos="fade-right" className="hidden md:flex w-full space-x-2">
          <div className=" flex flex-col space-y-2 items-center text-center w-1/4">
            <div className="rounded-full border-2 border-bg-eunry w-20 h-20 p-0.5">
              <div className="bg-bg-eunry rounded-full w-full h-full text-white flex justify-center items-center">
                <Image src={SearchIcon} width={60} height={30} />
              </div>
            </div>
            <p className="font-normal text-bg-charcoal">Streamlines & Highly Personalized Search</p>
          </div>
          <div className="flex flex-col space-y-2 items-center text-center w-1/4">
            <div className="rounded-full border-2 border-bg-eunry w-20 h-20 p-0.5">
              <div className="bg-bg-eunry rounded-full w-full h-full text-white flex justify-center items-center">
                <Image src={ListIcon} width={35} height={45} />
              </div>
            </div>
            <p className="font-normal text-bg-charcoal">Checklist to guide your planning</p>
          </div>
          <div className="flex flex-col space-y-2 items-center text-center w-1/4">
            <div className="rounded-full border-2 border-bg-eunry w-20 h-20 p-0.5">
              <div className="bg-bg-eunry rounded-full w-full h-full text-white flex justify-center items-center">
                <Image src={CurrencyIcon} width={45} height={55} />
              </div>
            </div>
            <p className="font-normal text-bg-charcoal">Milestone payments lets you save as you go towards your wedding</p>
          </div>
          <div className="flex flex-col space-y-2 items-center text-center w-1/4">
            <div className="rounded-full border-2 border-bg-eunry w-20 h-20 p-0.5">
              <div className="bg-bg-eunry rounded-full w-full h-full text-white flex justify-center items-center">
                <Image src={CheckedIcon} width={35} height={45} />
              </div>
            </div>
            <p className="font-normal text-bg-charcoal">Last milestone payment held until service is delivered / performed</p>
          </div>
        </div>
        <DreamTeamMobile />
      </div>
    </div>
  );
};

export default DreamTeam;
