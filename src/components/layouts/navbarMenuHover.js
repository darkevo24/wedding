import React from "react";
import Image from "next/image";
import Love from "../../../public/icons/love.svg";

const NavbarMenuHover = ({ menu }) => {
  return (
    <>
      {menu === "planWedding" && (
        <div
          className={
            "absolute -left-56 top-5 z-20 bg-transparent cursor-pointer " + (menu === "planWedding" ? "inline animate-fade-in-down" : "hidden")
          }
        >
          <div className="bg-white rounded-md shadow-lg mt-4 cursor-default">
            <div className="flex" style={{ width: "1100px" }}>
              <div className="px-5 py-5 rounded-l-md bg-bg-romance text-bg-primary" style={{ width: "25%" }}>
                <div className="w-full flex justify-center">
                  <p className="font-cagily text-2xl">Plan Your Dream Wedding</p>
                </div>
                <div className="font-worksans mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Comprehensive To Do List and Work in Progress</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <Image src={Love} width={45} height={45} />
                    </div>
                    <p className="text-sm">Track, Communicate and Make Vendor Appointments online</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Track Budget, View Milestone Payment Progress</p>
                  </div>
                </div>
              </div>
              <div className="p-4" style={{ width: "45%" }}>
                <div className="relative w-full h-full text-white">
                  <div
                    style={{ backgroundColor: "rgba(219, 168, 161, 0.5)" }}
                    className="absolute w-full h-full flex flex-col justify-center items-center px-5 rounded-md"
                  >
                    <p className="font-cagily text-center text-xl">
                      The Ultimate Time Saver Wedding Planning Checklist to get you started and organized
                    </p>
                    <button className="bg-bg-primary hover:bg-bg-primary-darker cursor-pointer rounded-md flex font-worksans-medium items-center justify-center px-5 py-2 mt-5">
                      Go To Checklist
                    </button>
                  </div>
                  <div className="bg-bg-menu bg-cover object-cover bg-center w-full h-full rounded-md"></div>
                </div>
              </div>
              <div className="py-4 flex" style={{ width: "30%" }}>
                <div className="border-r border-r-bg-primary h-full"></div>
                <div className="w-full mx-3">
                  <p className="font-cagily text-xl text-bg-primary">Tips</p>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu1 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">Questions to ask your Vendors</p>
                  </div>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu2 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">What to consider in Meals Planning for Guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {menu === "vendor" && (
        <div
          className={"absolute -left-96 top-5 z-20 bg-transparent cursor-pointer " + (menu === "vendor" ? "inline animate-fade-in-down" : "hidden")}
        >
          <div className="bg-white rounded-md shadow-lg mt-4 cursor-default">
            <div className="flex" style={{ width: "1100px" }}>
              <div className="px-5 py-5 rounded-l-md bg-bg-romance text-bg-primary" style={{ width: "25%" }}>
                <div className="w-full flex justify-center">
                  <p className="font-cagily text-2xl">Vendor</p>
                </div>
                <div className="font-worksans mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Comprehensive To Do List and Work in Progress</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <Image src={Love} width={45} height={45} />
                    </div>
                    <p className="text-sm">Track, Communicate and Make Vendor Appointments online</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Track Budget, View Milestone Payment Progress</p>
                  </div>
                </div>
              </div>
              <div className="p-4" style={{ width: "45%" }}>
                <div className="relative w-full h-full text-white">
                  <div
                    style={{ backgroundColor: "rgba(219, 168, 161, 0.5)" }}
                    className="absolute w-full h-full flex flex-col justify-center items-center px-5 rounded-md"
                  >
                    <p className="font-cagily text-center text-xl">
                      The Ultimate Time Saver Wedding Planning Checklist to get you started and organized
                    </p>
                    <button className="bg-bg-primary hover:bg-bg-primary-darker cursor-pointer rounded-md flex font-worksans-medium items-center justify-center px-5 py-2 mt-5">
                      Go To Checklist
                    </button>
                  </div>
                  <div className="bg-bg-menu bg-cover object-cover bg-center w-full h-full rounded-md"></div>
                </div>
              </div>
              <div className="py-4 flex" style={{ width: "30%" }}>
                <div className="border-r border-r-bg-primary h-full"></div>
                <div className="w-full mx-3">
                  <p className="font-cagily text-xl text-bg-primary">Tips</p>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu1 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">Questions to ask your Vendors</p>
                  </div>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu2 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">What to consider in Meals Planning for Guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {menu === "guest" && (
        <div
          style={{ left: "-470px" }}
          className={"absolute top-5 z-20 bg-transparent cursor-pointer " + (menu === "guest" ? "inline animate-fade-in-down" : "hidden")}
        >
          <div className="bg-white rounded-md shadow-lg mt-4 cursor-default">
            <div className="flex" style={{ width: "1100px" }}>
              <div className="px-5 py-5 rounded-l-md bg-bg-romance text-bg-primary" style={{ width: "25%" }}>
                <div className="w-full flex justify-center">
                  <p className="font-cagily text-2xl">Guest List</p>
                </div>
                <div className="font-worksans mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Comprehensive To Do List and Work in Progress</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <Image src={Love} width={45} height={45} />
                    </div>
                    <p className="text-sm">Track, Communicate and Make Vendor Appointments online</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Track Budget, View Milestone Payment Progress</p>
                  </div>
                </div>
              </div>
              <div className="p-4" style={{ width: "45%" }}>
                <div className="relative w-full h-full text-white">
                  <div
                    style={{ backgroundColor: "rgba(219, 168, 161, 0.5)" }}
                    className="absolute w-full h-full flex flex-col justify-center items-center px-5 rounded-md"
                  >
                    <p className="font-cagily text-center text-xl">
                      The Ultimate Time Saver Wedding Planning Checklist to get you started and organized
                    </p>
                    <button className="bg-bg-primary hover:bg-bg-primary-darker cursor-pointer rounded-md flex font-worksans-medium items-center justify-center px-5 py-2 mt-5">
                      Go To Checklist
                    </button>
                  </div>
                  <div className="bg-bg-menu bg-cover object-cover bg-center w-full h-full rounded-md"></div>
                </div>
              </div>
              <div className="py-4 flex" style={{ width: "30%" }}>
                <div className="border-r border-r-bg-primary h-full"></div>
                <div className="w-full mx-3">
                  <p className="font-cagily text-xl text-bg-primary">Tips</p>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu1 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">Questions to ask your Vendors</p>
                  </div>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu2 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">What to consider in Meals Planning for Guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {menu === "inspiration" && (
        <div
          style={{ left: "-570px" }}
          className={"absolute top-5 z-20 bg-transparent cursor-pointer " + (menu === "inspiration" ? "inline animate-fade-in-down" : "hidden")}
        >
          <div className="bg-white rounded-md shadow-lg mt-4 cursor-default">
            <div className="flex" style={{ width: "1100px" }}>
              <div className="px-5 py-5 rounded-l-md bg-bg-romance text-bg-primary" style={{ width: "25%" }}>
                <div className="w-full flex justify-center">
                  <p className="font-cagily text-2xl">Inspiration</p>
                </div>
                <div className="font-worksans mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Comprehensive To Do List and Work in Progress</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <Image src={Love} width={45} height={45} />
                    </div>
                    <p className="text-sm">Track, Communicate and Make Vendor Appointments online</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Track Budget, View Milestone Payment Progress</p>
                  </div>
                </div>
              </div>
              <div className="p-4" style={{ width: "45%" }}>
                <div className="relative w-full h-full text-white">
                  <div
                    style={{ backgroundColor: "rgba(219, 168, 161, 0.5)" }}
                    className="absolute w-full h-full flex flex-col justify-center items-center px-5 rounded-md"
                  >
                    <p className="font-cagily text-center text-xl">
                      The Ultimate Time Saver Wedding Planning Checklist to get you started and organized
                    </p>
                    <button className="bg-bg-primary hover:bg-bg-primary-darker cursor-pointer rounded-md flex font-worksans-medium items-center justify-center px-5 py-2 mt-5">
                      Go To Checklist
                    </button>
                  </div>
                  <div className="bg-bg-menu bg-cover object-cover bg-center w-full h-full rounded-md"></div>
                </div>
              </div>
              <div className="py-4 flex" style={{ width: "30%" }}>
                <div className="border-r border-r-bg-primary h-full"></div>
                <div className="w-full mx-3">
                  <p className="font-cagily text-xl text-bg-primary">Tips</p>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu1 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">Questions to ask your Vendors</p>
                  </div>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu2 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">What to consider in Meals Planning for Guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {menu === "tips" && (
        <div
          style={{ left: "-670px" }}
          className={"absolute top-5 z-20 bg-transparent cursor-pointer " + (menu === "tips" ? "inline animate-fade-in-down" : "hidden")}
        >
          <div className="bg-white rounded-md shadow-lg mt-4 cursor-default">
            <div className="flex" style={{ width: "1100px" }}>
              <div className="px-5 py-5 rounded-l-md bg-bg-romance text-bg-primary" style={{ width: "25%" }}>
                <div className="w-full flex justify-center">
                  <p className="font-cagily text-2xl">Helpful Tips</p>
                </div>
                <div className="font-worksans mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Comprehensive To Do List and Work in Progress</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div>
                      <Image src={Love} width={45} height={45} />
                    </div>
                    <p className="text-sm">Track, Communicate and Make Vendor Appointments online</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image src={Love} width={35} height={35} />
                    <p className="text-sm">Track Budget, View Milestone Payment Progress</p>
                  </div>
                </div>
              </div>
              <div className="p-4" style={{ width: "45%" }}>
                <div className="relative w-full h-full text-white">
                  <div
                    style={{ backgroundColor: "rgba(219, 168, 161, 0.5)" }}
                    className="absolute w-full h-full flex flex-col justify-center items-center px-5 rounded-md"
                  >
                    <p className="font-cagily text-center text-xl">
                      The Ultimate Time Saver Wedding Planning Checklist to get you started and organized
                    </p>
                    <button className="bg-bg-primary hover:bg-bg-primary-darker cursor-pointer rounded-md flex font-worksans-medium items-center justify-center px-5 py-2 mt-5">
                      Go To Checklist
                    </button>
                  </div>
                  <div className="bg-bg-menu bg-cover object-cover bg-center w-full h-full rounded-md"></div>
                </div>
              </div>
              <div className="py-4 flex" style={{ width: "30%" }}>
                <div className="border-r border-r-bg-primary h-full"></div>
                <div className="w-full mx-3">
                  <p className="font-cagily text-xl text-bg-primary">Tips</p>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu1 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">Questions to ask your Vendors</p>
                  </div>
                  <div className="w-full mt-3">
                    <div className="bg-bg-menu2 bg-cover object-cover bg-center h-24 w-full rounded-md"></div>
                    <p className="text-sm font-worksans-medium">What to consider in Meals Planning for Guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMenuHover;
