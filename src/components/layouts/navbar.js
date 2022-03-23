import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/images/logo-dark.png";
import { TiHeart } from "react-icons/ti";
import NavbarMobile from "./mobile/navbar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { insertToken, insertUserData } from "../../redux/reducers/authToken";
import NavbarMenu from "./navbarMenu";

const Navbar = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const currentRoute = route.pathname;
  const [search, setSearch] = useState();
  const isLoginRedux = useSelector((state) => state.authToken.userData);
  const [isLogin, setIsLogin] = useState(false);

  const doSearch = () => {
    console.log("Searching for: ", search);
  };

  const doLogout = () => {
    dispatch(insertToken(null));
    dispatch(insertUserData(null));
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    route.replace("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!isLoginRedux && !token) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [currentRoute]);

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
        {!isLogin ? (
          <div className="flex justify-center space-x-2">
            <p onClick={() => route.push("/vendor/register")} className="cursor-pointer hover:underline">
              Become a Vendor
            </p>
            <div className="border-r border-r-gray-300 opacity-20"></div>
            <p onClick={() => route.push("/login")} className="cursor-pointer hover:underline">
              Login
            </p>
            <div className="border-r border-r-gray-300 opacity-20"></div>
            <p onClick={() => route.push("/register")} className="cursor-pointer hover:underline">
              Join Us
            </p>
          </div>
        ) : isLogin && currentRoute === "/" ? (
          <div className="flex justify-center space-x-2">
            <p onClick={() => route.push("/user/vendor-management")} className="cursor-pointer hover:underline">
              Dashboard
            </p>
          </div>
        ) : (
          <div className="flex justify-center space-x-2">
            <p onClick={() => doLogout()} className="cursor-pointer hover:underline">
              Logout
            </p>
          </div>
        )}
      </div>
      <div className="hidden md:flex py-2 w-full px-7 justify-between items-center bg-slate-50 shadow-md">
        <div onClick={() => route.push("/")} className="cursor-pointer select-none">
          <Image src={Logo} width={135} height={70} />
        </div>
        <div className="flex space-x-5 text-bg-charcoal">
          {/* <div className="relative">
            <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Plan a Wedding</p>
            <div className="absolute -right-1/2 top-7 z-20 bg-white h-20 w-60 rounded-md shadow-lg">
              <p>sad</p>
            </div>
          </div>
          <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Vendor</p>
          <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Guest List</p>
          <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Inspiration</p>
          <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Helpful Tips</p> */}

          <NavbarMenu />
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
