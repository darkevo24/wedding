import Head from "next/head";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { BsFilter, BsPlusLg } from "react-icons/bs";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import VendorItem from "../../components/layouts/pages/user/vendorItem";

const VendorManagement = () => {
  const [value, setValue] = useState([1500, 12000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#DBA8A1",
      },
      secondary: red,
    },
  });

  const valuetext = (value) => {
    return `${value}`;
  };

  return (
    <>
      <Head>
        <title>WeddingPlatform | User - Vendor Management</title>
      </Head>
      <div className="text-bg-primary w-full pb-6">
        <div className="bg-bg-serenade w-full p-10 h-auto flex flex-col justify-center items-center">
          <div className="text-bg-primary">
            <p className="text-3xl">Manage Your Vendors</p>
          </div>
          <div className="flex justify-center items-center lg:flex-row flex-col">
            <div className="w-64 bg-white h-32 mt-5 flex flex-col justify-center items-center m-1">
              <p className="text-xl">BUDGET</p>
              <p className="text-3xl">$25,000</p>
              <p className="italic text-sm">for wedding</p>
            </div>
            <div className="w-64 bg-white h-32 mt-5 flex flex-col justify-center items-center m-1">
              <p className="text-xl">ACTUAL</p>
              <p className="text-3xl">$10,000</p>
              <p className="italic text-sm">$15,000 to spend</p>
            </div>
            <div className="w-64 bg-white h-32 mt-5 flex flex-col justify-center items-center m-1">
              <p className="text-xl">PAID</p>
              <p className="text-3xl">$5,000</p>
              <p className="italic text-sm">$5000 to pay</p>
            </div>
          </div>
        </div>
        <div className="px-2 md:px-10 mt-5 w-full">
          <div className="md:flex">
            <div className="w-full md:w-1/2">
              <div className="flex w-full md:w-10/12">
                <input
                  className="rounded-l-md bg-bg-romance outline-none px-5 py-2 w-3/5"
                  type="text"
                  placeholder="What vendor are you looking for?"
                />
                <div className="border-r border-r-gray-300"></div>
                <input className="outline-none bg-bg-romance px-5 py-2 w-2/5" type="text" placeholder="Where" />
                <div className="cursor-pointer w-10 h-10 bg-bg-primary rounded-r-md flex justify-center items-center">
                  <SearchIcon style={{ color: "white", width: "100%", height: "80%" }}></SearchIcon>
                </div>
              </div>
              <div className="hidden md:flex mt-5 space-x-2">
                <div className="cursor-pointer flex items-center border-gray-300 border rounded-md px-2 py-1 hover:bg-bg-primary hover:text-white">
                  <p>Location</p>
                </div>
                <div className="cursor-pointer flex items-center border-gray-300 border rounded-md px-2 py-1 hover:bg-bg-primary hover:text-white">
                  <p>Photography</p>
                </div>
                <div className="cursor-pointer flex items-center border-gray-300 border rounded-md px-2 py-1 hover:bg-bg-primary hover:text-white">
                  <p>Availability</p>
                </div>
                <div className="cursor-pointer flex items-center border-gray-300 border rounded-md px-2 py-1 hover:bg-bg-primary hover:text-white">
                  <p>Photo Format</p>
                </div>
                <div className="cursor-pointer flex items-center border-gray-300 border rounded-md px-2 py-1 hover:bg-bg-primary hover:text-white">
                  <p>Post Code</p>
                </div>
                <div className="cursor-pointer flex items-center border-gray-300 border rounded-md px-2 py-1 hover:bg-bg-primary hover:text-white">
                  <p>All filters</p>
                </div>
              </div>
              <div className="md:hidden w-full flex justify-end my-2">
                <div className="flex cursor-pointer text-bg-eunry items-center space-x-1">
                  <BsFilter size={25} />
                  <p className="text-lg font-semibold">Filter</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center md:flex-col md:w-1/2 md:justify-center md:items-end md:space-y-2">
              <button className="bg-bg-primary hidden md:inline text-white font-medium py-1.5 px-8 rounded-md hover:bg-bg-primary-darker">
                + Add Vendor
              </button>
              <button className="bg-bg-primary text-white font-medium py-1.5 px-8 rounded-md hover:bg-bg-primary-darker">Shortlisted Vendors</button>
              <button className="bg-bg-primary md:hidden text-white font-medium py-1.5 px-3 rounded-md hover:bg-bg-primary-darker ml-3">
                <BsPlusLg size={20} />
              </button>
            </div>
          </div>
          <div className="relative md:flex hidden mt-7">
            <p className="text-bg-primary font-bold">PRICE RANGE</p>
            <p className="ml-10">S$1500</p>
            <Box className="mx-5" sx={{ width: 300 }}>
              <Slider
                theme={theme}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={1500}
                max={12000}
                color="primary"
              />
            </Box>
            <p className="ml-2">S$12000</p>
          </div>

          <div className="w-full border-t border-t-gray-400 mt-16 mb-5"></div>

          <div className="md:flex md:flex-wrap w-full">
            <VendorItem />
            <VendorItem />
            <VendorItem />
            <VendorItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorManagement;
