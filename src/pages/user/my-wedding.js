import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import ring from "../../../public/icons/ring.png";
import { MdOutlinePhotoCamera, MdOutlineFileUpload } from "react-icons/md";
import DayPicker from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import { MdOutlineFastfood, MdOutlineDirectionsBusFilled } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsCamera } from "react-icons/bs";
import { GiMicrophone } from "react-icons/gi";

const VendorManagement = () => {
  const [showWeddingCalendar, setShowWeddingCalendar] = useState(false);
  const [weddingDate, setWeddingDate] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

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
                  <p>{"Just Said Yes? Let's Get Started!"}</p>
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
                <p className="text-lg">{"Congratulations - you're engaged!"}</p>
                <p className="text-lg">{"It's time to start plaanning your dream wedding."}</p>
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
                  <div className="w-full mt-2 space-y-2 relative">
                    <p className="font-worksans-medium">Wedding Date</p>
                    <div
                      onClick={() => setShowWeddingCalendar(!showWeddingCalendar)}
                      className="outline-none w-full border-b border-b-gray-100 cursor-pointer select-none"
                    >
                      <p>{weddingDate ? weddingDate : "dd/mm/yyyy"}</p>
                    </div>
                    <div className="bg-white absolute top-13">
                      {showWeddingCalendar && (
                        <DayPicker
                          onDayClick={(e) => {
                            setSelectedDay(e);
                            setShowWeddingCalendar(false);
                            setWeddingDate(dateFnsFormat(e, "dd-MMM-yyyy"));
                          }}
                          selectedDays={selectedDay}
                        />
                      )}
                    </div>
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
        <div className="bg-bg-eunry w-full flex justify-center md:py-14">
          <div className="w-full px-3 md:w-10/12 md:px-0">
            <div className="w-full flex text-white">
              <div className="w-1/2 flex flex-col justify-between">
                <p className="font-cagily text-4xl">Your Vendor Team</p>
                <p className="font-worksans-medium text-lg">0 OUT OF 21 CATEGORIES HIRED</p>
              </div>
              <div className="flex w-1/2 space-x-5">
                <div className="w-1/2 flex flex-col justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-1/4 flex items-center">
                      <p className="font-semibold text-xl">BUDGET</p>
                    </div>
                    <div className="flex border-b border-b-white py-0.5 text-xl font-semibold w-1/2">
                      <p>$</p>
                      <input type="number" className="outline-none bg-transparent text-xl font-semibold w-full" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1/4 flex items-center">
                      <p className="font-semibold text-xl">ACTUAL</p>
                    </div>
                    <div className="flex border-b border-b-white py-0.5 text-xl font-semibold w-1/2">
                      <p>$</p>
                      <input type="number" className="outline-none bg-transparent text-xl font-semibold w-full" />
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="font-semibold">MILESTONE PAID</p>
                  <div className="w-full h-5 rounded-xl bg-bg-romance relative mt-1">
                    <div className="w-full h-full absolute flex items-center justify-center">
                      <p className="text-bg-eunry">50% completed</p>
                    </div>
                    <div style={{ width: "50%" }} className="h-full bg-bg-primary rounded-xl"></div>
                  </div>
                  <div className="mt-2 border-b border-b-white">
                    <p className="font-semibold text-xl">$7000 of $15000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex mt-14 justify-between space-x-3">
              <div className="text-white flex flex-col items-center space-y-2">
                <div className="w-48 h-48 rounded-md bg-bg-romance flex flex-col justify-center items-center text-bg-primary cursor-pointer hover:opacity-80">
                  <GoLocation size={30} className="text-bg-primary" />
                  <p className="font-semibold mt-2">+ Add</p>
                </div>
                <p className="text-lg">Venue</p>
              </div>
              <div className="text-white flex flex-col items-center space-y-2">
                <div className="w-48 h-48 rounded-md bg-bg-romance flex flex-col justify-center items-center text-bg-primary cursor-pointer hover:opacity-80">
                  <MdOutlineFastfood size={30} />
                  <p className="font-semibold mt-2">+ Add</p>
                </div>
                <p className="text-lg">Catering</p>
              </div>
              <div className="text-white flex flex-col items-center space-y-2">
                <div className="w-48 h-48 rounded-md bg-bg-romance flex flex-col justify-center items-center text-bg-primary cursor-pointer hover:opacity-80">
                  <BsCamera size={30} />
                  <p className="font-semibold mt-2">+ Add</p>
                </div>
                <p className="text-lg">Photographer</p>
              </div>
              <div className="text-white flex flex-col items-center space-y-2">
                <div className="w-48 h-48 rounded-md bg-bg-romance flex flex-col justify-center items-center text-bg-primary cursor-pointer hover:opacity-80">
                  <GiMicrophone size={30} />
                  <p className="font-semibold mt-2">+ Add</p>
                </div>
                <p className="text-lg">Music</p>
              </div>
              <div className="text-white flex flex-col items-center space-y-2">
                <div className="w-48 h-48 rounded-md bg-bg-romance flex flex-col justify-center items-center text-bg-primary cursor-pointer hover:opacity-80">
                  <MdOutlineDirectionsBusFilled size={30} />
                  <p className="font-semibold mt-2">+ Add</p>
                </div>
                <p className="text-lg">Transportation</p>
              </div>
            </div>
            <div className="w-full flex justify-center mt-10 text-white">
              <button className="bg-bg-primary hover:bg-bg-primary-darker rounded-md px-8 py-2 font-worksans-medium">View Vendors</button>
            </div>
          </div>
        </div>
        {/* <div className="bg-bg-primary">
          <p>upcoming task</p>
        </div> */}
      </div>
    </>
  );
};

export default VendorManagement;
