import Head from "next/head";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import AddVendor from "../mobile/addVendor";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { red } from "@mui/material/colors";
import Image from "next/image";
import venue from "../../../public/images/venue.png"
import Photography from "../../../public/images/photography.png"
import cakes from "../../../public/images/cakes.png"
import LinearWithValueLabel from "./ProgressBar";
import CallIcon from '@mui/icons-material/Call';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BasicSelect from "./select";
import close from "../../../public/images/close.png"

function valuetext(value) {
  return `${value}`;
}

const VendorManagement = () => {
  const [value, setValue] = React.useState([0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette:{
      primary: {
        main : "#DBA8A1"
      },
      secondary : red
    }
  })
  return (
    <>
      <Head>
        <title>WeddingPlatform | User - Vendor Management</title>
      </Head>
      <div className="">
        <div className=" bg-bg-serenade w-full p-10 h-auto flex flex-col justify-center items-center">
          <div className="text-bg-primary">
            <p className="text-3xl font-bold">Manage Your Vendors</p>
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
        <div className="hidden lg:flex  flex flex-col lg:flex-row">
        <div className=" p-10 w-full lg:w-4/5">
          <div className="flex">
          <input className="rounded-l-md outline-none px-5 py-2 w-80" type="text" placeholder="What vendor are you looking for?" style={{ backgroundColor : "#EAE4DA" ,placeholder : "#AAAAAA"}}></input>
          <input className="outline-none px-5 py-2 w-40" type="text" placeholder="Where" style={{ backgroundColor : "#EAE4DA" ,placeholder : "#AAAAAA"}}></input>
          <div className="cursor-pointer w-10 h-10 bg-bg-primary rounded-r-md flex justify-center items-center">
          <SearchIcon style={{ color : "white",width:"100%",height : "80%" }} ></SearchIcon>
          </div>
          </div>
          <div className="flex hidden lg:flex">
            <div className="flex">
              <p className= "cursor-pointer rounded-md border-2 p-1 m-1">Location</p>
            </div>
            <div className="flex">
              <p className= "cursor-pointer rounded-md border-2 p-1 m-1">Photography</p>
            </div>
            <div className="flex">
              <p className= "cursor-pointer rounded-md border-2 p-1 m-1">Availability</p>
            </div>
            <div className="flex">
              <p className= "cursor-pointer rounded-md border-2 p-1 m-1">Photo Format</p>
            </div>
            <div className="flex">
              <p className= "cursor-pointer rounded-md border-2 p-1 m-1">Post Code</p>
            </div>
            <div className="flex">
              <p className= "cursor-pointer rounded-md border-2 p-1 m-1">All filters</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex p-5 flex flex-row-reverse justify-center lg:flex-col items-end">
          <button className="bg-bg-primary text-white font-bold w-36 h-8">+ add vendor</button>
          <button className="bg-bg-primary text-white font-bold w-52 h-8 mt-5">Shortlisted Vendors</button>
        </div>
        </div>
        <AddVendor ></AddVendor>
        <div className=" p-10 relative bottom-10 flex hidden lg:flex">
          <p className="text-bg-primary font-bold">PRICE RANGE</p>
          <p className="ml-10">S$1500</p>
          <Box className="ml-5" sx={{ width: 300 }}>
          <Slider
          theme={theme}
            getAriaLabel={() => 'Temperature range'}
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
        <p className="lg:hidden block text-3xl ml-10 text-bg-primary">Hired Vendors </p>
        <div className="flex flex-col justify-center items-center">
        <div style={{ backgroundColor : "#AAAAAA" }} className="w-11/12 h-0.5">
        </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center">
          
          <div style={{ maxWidth : "400px" }} className="rounded-md m-10 relative">
            <Image className="w-full" src={venue}></Image>
            <div className="flex p-1">
              <div className="w-2/3  flex justify-center items-center">
              <p>Budget</p>
              </div>
              <div className=" w-full">
                <LinearWithValueLabel></LinearWithValueLabel>
              </div>
            </div>
            <div className="flex p-1">
              <div className="w-2/3  flex justify-center items-center">
              <p>Order Amount</p>
              </div>
              <div className=" w-full">
                <LinearWithValueLabel></LinearWithValueLabel>
              </div>
            </div>
            <div className="flex p-1">
              <div className="w-2/3  flex justify-center items-center">
              <p>Payment status</p>
              </div>
              <div className=" w-full">
                <LinearWithValueLabel></LinearWithValueLabel>
              </div>
            </div>
            <div className="flex justify-center items-center">
            <div style={{ backgroundColor : "#DBA8A1" }} className="w-10/12 h-20 m-2 rounded-md flex flex-col justify-center items-center">
              <p className="text-white">Gardens Boutique Hotel</p>
              <div className="flex justify-center items-center">
                <CallIcon style={{ color:"white" }}></CallIcon>
                <DateRangeRoundedIcon style={{ color:"white" }}></DateRangeRoundedIcon>
                <FavoriteBorderRoundedIcon style={{ color:"white" }}></FavoriteBorderRoundedIcon>
              </div>
            </div>
            </div>
            <div className="w-full p-4 relative bottom-2" >
              <BasicSelect></BasicSelect>
            </div>
            <div style={{right:0,top:0}} className="absolute">
              <Image src={close}></Image>
            </div>
          </div>

          <div style={{ maxWidth : "400px" }} className="rounded-md m-10 relative">
            <Image src={Photography}></Image>
            <div className="flex p-1">
              <div className="w-2/3  flex justify-center items-center">
              <p>Budget</p>
              </div>
              <div className=" w-full">
                <LinearWithValueLabel></LinearWithValueLabel>
              </div>
            </div>
            <div className="flex p-1">
              <div className="w-2/3  flex justify-center items-center">
              <p>Order Amount</p>
              </div>
              <div className=" w-full">
                <LinearWithValueLabel></LinearWithValueLabel>
              </div>
            </div>
            <div className="flex p-1">
              <div className="w-2/3  flex justify-center items-center">
              <p>Payment status</p>
              </div>
              <div className=" w-full">
                <LinearWithValueLabel></LinearWithValueLabel>
              </div>
            </div>
            <div className="flex justify-center items-center">
            <div style={{ backgroundColor : "#DBA8A1" }} className="w-10/12 h-20 m-2 rounded-md flex flex-col justify-center items-center">
              <p className="text-white">Gardens Boutique Hotel</p>
              <div className="flex justify-center items-center">
                <CallIcon style={{ color:"white" }}></CallIcon>
                <DateRangeRoundedIcon style={{ color:"white" }}></DateRangeRoundedIcon>
                <FavoriteBorderRoundedIcon style={{ color:"white" }}></FavoriteBorderRoundedIcon>
              </div>
            </div>
            </div>
            <div className="w-full p-4 relative bottom-2" >
              <BasicSelect></BasicSelect>
            </div>
            <div style={{right:0,top:0}} className="absolute">
              <Image src={close}></Image>
            </div>
          </div>

          <div style={{ maxWidth : "400px" }} className="rounded-md m-10 relative">
            <Image src={cakes}></Image>
            <div className="flex p-1">
              <div className="w-2/3  flex justify-center items-center">
              <p>Budget</p>
              </div>
              <div className=" w-full">
                <LinearWithValueLabel></LinearWithValueLabel>
              </div>
            </div>
            <div className="flex p-1">
              <div className="w-2/3  flex justify-center items-center">
              <p>Order Amount</p>
              </div>
              <div className=" w-full">
                <LinearWithValueLabel></LinearWithValueLabel>
              </div>
            </div>
            <div className="flex p-1">
              <div className="w-2/3  flex justify-center items-center">
              <p>Payment status</p>
              </div>
              <div className=" w-full">
                <LinearWithValueLabel></LinearWithValueLabel>
              </div>
            </div>
            <div className="flex justify-center items-center">
            <div style={{ backgroundColor : "#DBA8A1" }} className="w-10/12 h-20 m-2 rounded-md flex flex-col justify-center items-center">
              <p className="text-white">Gardens Boutique Hotel</p>
              <div className="flex justify-center items-center">
                <CallIcon style={{ color:"white" }}></CallIcon>
                <DateRangeRoundedIcon style={{ color:"white" }}></DateRangeRoundedIcon>
                <FavoriteBorderRoundedIcon style={{ color:"white" }}></FavoriteBorderRoundedIcon>
              </div>
            </div>
            </div>
            <div className="w-full p-4 relative bottom-2" >
              <BasicSelect></BasicSelect>
            </div>
            <div style={{right:0,top:0}} className="absolute">
              <Image src={close}></Image>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default VendorManagement;
