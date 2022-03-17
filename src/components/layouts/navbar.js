import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/images/logo-dark.png";
import { TiHeart } from "react-icons/ti";
import NavbarMobile from "./mobile/navbar";
import { useRouter } from "next/router";

const Navbar = () => {
  const route = useRouter();
  const [search, setSearch] = useState();

  const doSearch = () => {
    console.log("Searching for: ", search);
  };

  return (
    // <div className="sticky top-0 z-40">
    <div>
      <div className="px-1 py-1 md:flex md:px-7 justify-between w-full items-center bg-bg-primary text-white">
        <div className="flex justify-center md:flex-none">
          <p className="flex items-center text-center">
            Enjoy 5% off
            <span className="mx-1 hidden sm:inline">
              <TiHeart size={20} />
            </span>
            when you book your service here!
          </p>
        </div>
        <div className="flex justify-center space-x-2">
          <p onClick={() => route.push("/vendor/register")} className="cursor-pointer hover:underline">
            Become a Vendor
          </p>
          <div className="border-r border-r-gray-300"></div>
          <p onClick={() => route.push("/login")} className="cursor-pointer hover:underline">
            Login
          </p>
          <div className="border-r border-r-gray-300"></div>
          <p onClick={() => route.push("/register")} className="cursor-pointer hover:underline">
            Join Us
          </p>
        </div>
      </div>
      <div className="hidden md:flex py-2 w-full px-7 justify-between items-center bg-slate-50 shadow-md">
        <div>
          <Image src={Logo} width={135} height={70} />
        </div>
        <div className="flex space-x-5 text-bg-primary">
          <p className="font-medium text-lg cursor-pointer select-none hover:underline">Plan a Wedding</p>
          <p className="font-medium text-lg cursor-pointer select-none hover:underline">Vendor</p>
          <p className="font-medium text-lg cursor-pointer select-none hover:underline">Website</p>
          <p className="font-medium text-lg cursor-pointer select-none hover:underline">Guest List</p>
          <p className="font-medium text-lg cursor-pointer select-none hover:underline">Inspiration</p>
          <p className="font-medium text-lg cursor-pointer select-none hover:underline">Helpful Tips</p>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                doSearch();
              }}
            >
              <div className="flex space-x-1 border-b border-gray-400">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." className="outline-none bg-transparent" />
                <button type="submit" className="bg-transparent hover:bg-transparent focus:bg-transparent focus:outline-none">
                  <svg className="h-5 w-5 fill-current text-bg-primary" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <NavbarMobile />
    </div>
  );
};

export default Navbar;
