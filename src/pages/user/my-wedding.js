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
import { MdOutlinePhotoCamera, MdOutlineFileUpload } from "react-icons/md";

const VendorManagement = () => {
  return (
    <>
      <Head>
        <title>WeddingPlatform | User - My Wedding</title>
      </Head>
      <div className="w-full font-worksans">
        <div className="bg-bg-mywedding bg-cover object-cover bg-center h-96 w-full relative flex justify-center">
          <div className="w-full md:w-10/12 h-full relative">
            <div className="absolute bottom-20 right-2 md:right-0 flex space-x-3">
              <div className="rounded-full bg-bg-eunry text-white px-3 py-3 cursor-pointer shadow-lg hover:opacity-80">
                <MdOutlinePhotoCamera size={30} />
              </div>
              <div className="rounded-full bg-bg-eunry text-white px-3 py-3 cursor-pointer shadow-lg hover:opacity-80">
                <MdOutlineFileUpload size={30} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bg-romance w-full flex justify-center">
          <div className="w-full px-3 relative bottom-16 space-y-2 md:space-y-0 md:w-10/12 md:flex md:space-x-2 md:px-0">
            <div className="bg-white w-full md:w-1/2 rounded-md py-8 px-10">
              <div className="w-full flex justify-center">
                <div className="h-20 w-20 rounded-full bg-bg-eunry shadow-lg relative left-3"></div>
                <div className="h-20 w-20 rounded-full bg-bg-eunry shadow-lg"></div>
              </div>
              <div className="w-full flex flex-col items-center space-y-3 text-bg-primary mt-6">
                <p className="font-cagily text-3xl">Claire</p>
                <p className="font-worksans text-lg">September 13, 2023</p>
              </div>
              <div className="w-full">
                <div className="w-full mb-2 flex justify-between mt-8 text-bg-dark-grey">
                  <p>Status:</p>
                  <p>Just Said Yes? Let's Get Started!</p>
                </div>
                <div className="w-full h-6 bg-gray-200 rounded-xl relative">
                  <div style={{ width: "28%" }} className="h-full bg-bg-primary rounded-xl absolute"></div>
                </div>
              </div>
              <div className="w-full flex justify-center space-x-3 mt-7">
                <div className="w-1/4">
                  <p>
                    1 <span className="text-bg-dark-grey">out of 21</span>
                  </p>
                  <p className="">
                    Services <br /> hired
                  </p>
                </div>
                <div className="w-1/4">
                  <p>
                    0 <span className="text-bg-dark-grey">out of 21</span>
                  </p>
                  <p className="">Task completed</p>
                </div>
                <div className="w-1/4">
                  <p>
                    0 <span className="text-bg-dark-grey">out of 21</span>
                  </p>
                  <p className="">
                    Guests <br /> invited
                  </p>
                </div>
                <div className="w-1/4">
                  <p>
                    0 <span className="text-bg-dark-grey">out of 21</span>
                  </p>
                  <p className="">{"Guests RSVP'ed"}</p>
                </div>
              </div>
            </div>
            <div className="bg-white w-full md:w-1/2 rounded-md py-8 px-10">
              <div className="w-full flex flex-col items-center text-bg-primary-darker">
                <p className="font-cagily text-3xl mb-3">Wedding Details</p>
                <p className="text-lg">Congratulations - you're engaged!</p>
                <p className="text-lg">It's time to start plaanning your dream wedding.</p>
              </div>
              <div className="w-full mt-9 flex justify-center">
                <div className="w-10/12 justify-between flex items-center">
                  <div className="h-20 w-20 rounded-full bg-bg-eunry shadow-lg"></div>
                  <div>
                    <Image src={ring} className="h-14 w-14" />
                  </div>
                  <div className="h-20 w-20 rounded-full bg-bg-eunry shadow-lg"></div>
                </div>
              </div>
              <div className="mt-5">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="w-full flex justify-between">
                    <div className="space-y-2">
                      <div className="space-y-2">
                        <p className="font-worksans-medium">{"Bride's First Name"}</p>
                        <input type="text" placeholder="name" className="outline-none w-full border-b border-b-gray-100" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-worksans-medium">{"Bride's Last Name"}</p>
                        <input type="text" placeholder="name" className="outline-none w-full border-b border-b-gray-100" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-2">
                        <p className="font-worksans-medium">{"Groom's First Name"}</p>
                        <input type="text" placeholder="name" className="outline-none w-full border-b border-b-gray-100" />
                      </div>
                      <div className="space-y-2">
                        <p className="font-worksans-medium">{"Groom's Last Name"}</p>
                        <input type="text" placeholder="name" className="outline-none w-full border-b border-b-gray-100" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-2 space-y-2">
                    <p className="font-worksans-medium">Wedding Date</p>
                    <input
                      type="date"
                      placeholder="dd/mm/yyyy"
                      min="1997-01-01"
                      max="2030-12-31"
                      className="outline-none w-full border-b border-b-gray-100"
                    />
                  </div>
                  <div className="w-full flex items-center space-x-2 mt-4">
                    <input type="checkbox" className="h-4 w-4 rounded-full" id="weddingDetail" />
                    <label htmlFor="weddingDetail">We have not decided yet</label>
                  </div>
                  <div className="w-full mt-8 flex justify-center">
                    <button type="submit" className="px-6 py-2 rounded-md bg-bg-primary hover:bg-bg-primary-darker text-white">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bg-eunry">
          <p>your vendor team</p>
        </div>
        <div className="bg-bg-primary">
          <p>upcoming task</p>
        </div>
      </div>
    </>
  );
};

export default VendorManagement;
