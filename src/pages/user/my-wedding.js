import Head from "next/head";
import React from "react";
import Image from "next/image";
import girl from "../../../public/icons/girl.png";
import man from "../../../public/icons/man.png";
import ring from "../../../public/icons/ring.png";
import download from "../../../public/icons/download.png";
import photo from "../../../public/icons/photo.png";
import location from "../../../public/icons/location.png";
import mic from "../../../public/icons/mic.png";
import bus from "../../../public/icons/bus.png";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import people from "../../../public/icons/people.png";

const VendorManagement = () => {
  return (
    <>
      <Head>
        <title>WeddingPlatform | User - My Wedding</title>
      </Head>
      <div className="">
        <div className="w-full">
          <div className="bg-bg-mywedding bg-center object-contain h-80"></div>
        </div>
        <div className="w-full h-full mb-10 ">
          <div style={{ backgroundColor: "#F5F1EA" }} className="flex justify-end items-center">
            <div className="relative bottom-40">
              <Image src={photo}></Image>
            </div>
            <div className="mx-10 relative bottom-40">
              <Image src={download}></Image>
            </div>
          </div>
          <div style={{ backgroundColor: "#F5F1EA" }} className="flex flex-col lg:flex-row justify-center items-center p-5">
            <div className="bg-white w-full m-3 lg:ml-10 shadow-lg relative bottom-40">
              <div className="flex justify-center mt-5">
                <Image objectFit="contain" src={girl}></Image>
                <Image objectFit="contain" src={man}></Image>
              </div>
              <p className="text-bg-primary text-center text-2xl">Claire</p>
              <div className="w-full flex justify-center items-center">
                <div className="w-8/12 my-40"></div>
              </div>
              <div style={{ backgroundColor: "#EAE4DA" }} className="w-full h-0.5"></div>
              <div className="cursor-pointer">
                <p className="text-bg-primary font-bold text-center mt-20 mb-10">Create your couple website</p>
              </div>
            </div>

            <div className="bg-white w-full m-3 lg:mr-10 shadow-lg relative bottom-40">
              <p className="text-bg-primary text-center mt-5 text-2xl">Wedding Details</p>
              <div className="flex justify-center items-center mt-28 mb-28">
                <Image objectFit="contain" src={girl}></Image>
                <div className="mx-10 lg:mx-20">
                  <Image src={ring}></Image>
                </div>
                <Image objectFit="contain" src={man}></Image>
              </div>
              <div className="flex my-12">
                <div style={{ backgroundColor: "#AAAAAA" }} className="w-full h-0.5 mx-10"></div>
                <div style={{ backgroundColor: "#AAAAAA" }} className="w-full h-0.5 mx-10"></div>
              </div>
              <div className="flex my-12">
                <div style={{ backgroundColor: "#AAAAAA" }} className="w-full h-0.5 mx-10"></div>
                <div style={{ backgroundColor: "#AAAAAA" }} className="w-full h-0.5 mx-10"></div>
              </div>
              <div className="flex my-12">
                <div style={{ backgroundColor: "#AAAAAA" }} className="w-full h-0.5 mx-10"></div>
                <div style={{ backgroundColor: "#AAAAAA" }} className="w-full h-0.5 mx-10"></div>
              </div>
              <div className="flex justify-center items-center p-10">
                <button className="text-white bg-bg-primary font-bold w-40 h-8 rounded-sm">Save Changes</button>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#DBA8A1" }} className="flex flex-col">
            <div className="w-full flex lg:flex-row flex-col text-white">
              <div className="w-full p-10 ">
                <p className="text-5xl">Your Vendor Team</p>
                <p className="font-bold mt-5 text-2xl">0 OUT OF 21 CATEGORIES HIRED</p>
              </div>

              <div className="w-full p-10 lg:p-0">
                <div className="border-2 w-full border-white lg:border-none rounded-md flex flex-col lg:flex-row">
                  <div className="w-full p-10 mb-3  flex flex-col lg:items-end items-center justify-center">
                    <div className="flex">
                      <p className="font-bold text-2xl">BUDGET</p>
                      <div className="ml-2">
                        <p className="font-bold text-3xl">$15,000</p>
                        <div className="w-full h-0.5 bg-white"></div>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <p className="font-bold text-2xl">Actual</p>
                      <div className="ml-2">
                        <p className="font-bold text-3xl">$10,000</p>
                        <div className="w-full h-0.5 bg-white"></div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full p-10     ">
                    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
                      <p className="font-bold text-2xl">MILESTONE PAID</p>
                      <div className="w-3/12"></div>
                    </div>
                    <div className="flex items-center justify-center lg:items-start lg:justify-start">
                      <div className="">
                        <p className="font-bold text-2xl">$7,500 of $15,000</p>
                        <div className="w-full h-0.5 bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-10 pt-0 justify-center items-center">
              <div className="flex flex-col lg:flex-row">
                <div className="flex">
                  <div style={{ backgroundColor: "#F5F1EA" }} className="m-4 w-40 h-40 lg:w-60 lg:h-60 flex flex-col justify-center items-center">
                    <Image src={location}></Image>
                    <p className="text-bg-primary text-xl mt-2">+ Add</p>
                  </div>
                  <div className="m-4 w-40 h-40 lg:w-60 lg:h-60 flex flex-col justify-center items-center bg-business relative">
                    <p style={{ bottom: 0 }} className="text-white text-xl mt-2 absolute font-bold">
                      Business Name
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div style={{ backgroundColor: "#F5F1EA" }} className="m-4 w-40 h-40 lg:w-60 lg:h-60 flex flex-col justify-center items-center">
                    <Image src={photo}></Image>
                    <p className="text-bg-primary text-xl mt-2">+ Add</p>
                  </div>
                  <div style={{ backgroundColor: "#F5F1EA" }} className="m-4 w-40 h-40 lg:w-60 lg:h-60 flex flex-col justify-center items-center">
                    <Image src={mic}></Image>
                    <p className="text-bg-primary text-xl mt-2">+ Add</p>
                  </div>
                  <div style={{ backgroundColor: "#F5F1EA" }} className="lg:flex m-4 w-60 h-60 flex flex-col justify-center items-center">
                    <Image src={bus}></Image>
                    <p className="text-bg-primary text-xl mt-8">+ Add</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mb-20">
              <button className="bg-bg-primary w-40 h-8 text-white font-bold rounded-sm">view Vendors</button>
            </div>
          </div>
          <div className="bg-bg-primary w-full text-white flex flex-col lg:flex-row">
            <div className="p-10 w-full">
              <p className="text-4xl text-white">Upcoming Tasks</p>
              <p className="font-bold text-white mt-2">0 OUT OF 81 COMPLETED</p>
              <p className="text-3xl mt-10">As Soon As Possible</p>
              <div className="rounded-md border-2 border-white p-5">
                <div className="ml-3 rounded-full border-2 border-white w-8 h-8 flex justify-center items-center">
                  <CheckRoundedIcon style={{ color: "white" }}></CheckRoundedIcon>
                </div>
              </div>
              <div style={{ borderTop: 0 }} className="rounded-md border-2 border-white p-5">
                <div className="ml-3 rounded-full border-2 border-white w-8 h-8 flex justify-center items-center">
                  <CheckRoundedIcon style={{ color: "white" }}></CheckRoundedIcon>
                </div>
              </div>
              <div style={{ borderTop: 0 }} className="rounded-md border-2 border-white p-5 ">
                <div className="ml-3 rounded-full border-2 border-white w-8 h-8 flex justify-center items-center">
                  <CheckRoundedIcon style={{ color: "white" }}></CheckRoundedIcon>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-40 h-10  font-bold" style={{ backgroundColor: "#DBA8A1" }}>
                  View All Tasks
                </button>
              </div>
            </div>

            <div className="p-10 lg:pl-0 w-full">
              <p className="text-4xl text-white">Guest List</p>
              <p className="font-bold text-white mt-2">0 OUT OF 50 GUESTS ATTENDING</p>
              <p className="hidden text-3xl mt-10">As Soon As Possible</p>
              <div style={{ marginTop: "75px" }} className="rounded-md border-2 border-white h-56 flex justify-center items-center">
                <Image src={people}></Image>
              </div>
              <div className="mt-8">
                <button className="w-40 h-10  font-bold" style={{ backgroundColor: "#DBA8A1" }}>
                  Manage Guests
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorManagement;
