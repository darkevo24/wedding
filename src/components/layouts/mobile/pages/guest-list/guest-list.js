import Head from "next/head";
import React from "react";
import Image from "next/image";
import img1 from "../../../../../../public/images/img1.png";
import img2 from "../../../../../../public/images/img2.png";
import img3 from "../../../../../../public/images/img3.png";
import img4 from "../../../../../../public/images/img4.png";
import { BsFilter, BsPlusLg } from "react-icons/bs";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TelegramIcon from "@mui/icons-material/Telegram";
import dot from "../../../../../../public/images/dot.png";

const Guest = () => {
  return (
    <>
      <Head>
        <title>WeddingPlatform | User - Guest List</title>
      </Head>
      <div className="lg:hidden block">
        <div style={{ backgroundColor: "#FCE4D4" }} className="w-full p-10">
          <div className="text-3xl text-bg-primary">
            <p>Overview</p>
          </div>
          <div className="h-24 w-full bg-white mt-10 flex overflow-x-auto space-x-8">
            <div className="p-6  w-full flex justify-start items-center flex-shrink-1">
              <Image objectFit="cover" cursor="pointer" src={img1}></Image>
            </div>
            <div className="p-6 w-full flex justify-start items-center flex-shrink-1">
              <Image src={img2}></Image>
            </div>
            <div className="p-6  w-full flex justify-start items-center flex-shrink-1">
              <Image src={img3}></Image>
            </div>
            <div className="p-6  w-full flex justify-start items-center flex-shrink-1">
              <Image src={img4}></Image>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="flex  p-5">
            <div className="w-2/3  flex">
              <button className="bg-bg-primary  text-white font-medium py-1.5 px-3 rounded-md hover:bg-bg-primary-darker ml-3">
                <BsPlusLg size={20} />
              </button>
              <button className="bg-bg-primary  text-white font-medium py-1 px-3 rounded-md hover:bg-bg-primary-darker ml-3 ">
                <SearchIcon size={20} />
              </button>
            </div>
            <div className="">
              <Box sx={{ minWidth: 180 }}>
                <FormControl fullWidth>
                  <InputLabel style={{ color: "#DBA8A1" }} id="demo-simple-select-label">
                    <span>
                      <TelegramIcon></TelegramIcon>
                    </span>{" "}
                    Message Request
                  </InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>

          <p className="font-bold text-xl p-5">
            COUPLE <span style={{ color: "#AAAAAA" }}>2</span>{" "}
          </p>
          <div style={{ backgroundColor: "#EAE4DA" }} className="w-full h-0.5"></div>

          <div className="flex items-center p-3">
            <div style={{ borderColor: "#EAE4DA" }} className="w-4 h-4 border-2"></div>
            <div className="ml-2">
              <p>Mike Wong</p>
            </div>
            <div className="block ml-auto">
              <Image src={dot}></Image>
            </div>
          </div>

          <div style={{ backgroundColor: "#EAE4DA" }} className="w-full h-0.5"></div>

          <div className="flex items-center p-3">
            <div style={{ borderColor: "#EAE4DA" }} className="w-4 h-4 border-2"></div>
            <div className="ml-2">
              <p>Tina Lim</p>
            </div>
            <div className="block ml-auto">
              <Image src={dot}></Image>
            </div>
          </div>

          <div style={{ backgroundColor: "#EAE4DA" }} className="h-5 w-full"></div>

          <p className="font-bold text-xl p-5">
            {"MIKE'S FAMILY"} <span style={{ color: "#AAAAAA" }}>2</span>{" "}
          </p>
          <div style={{ backgroundColor: "#EAE4DA" }} className="w-full h-0.5"></div>

          <div className="flex items-center p-3">
            <div style={{ borderColor: "#EAE4DA" }} className="w-4 h-4 border-2"></div>
            <div className="ml-2">
              <p>Clement Tan</p>
            </div>
            <div className="block ml-auto">
              <Image src={dot}></Image>
            </div>
          </div>

          <div style={{ backgroundColor: "#EAE4DA" }} className="w-full h-0.5"></div>

          <div className="flex items-center p-3">
            <div style={{ borderColor: "#EAE4DA" }} className="w-4 h-4 border-2"></div>
            <div className="ml-2">
              <p>Anthony Ling</p>
            </div>
            <div className="block ml-auto">
              <Image src={dot}></Image>
            </div>
          </div>

          <div style={{ backgroundColor: "#EAE4DA" }} className="w-full h-0.5"></div>

          <div className="bg-white w-full">
            <p className="mt-4 font-bold text-xl p-5">
              {"TINA'S COLLEAGUES"} <span style={{ color: "#AAAAAA" }}>0</span>{" "}
            </p>
          </div>

          <div style={{ backgroundColor: "#EAE4DA" }} className="h-14 w-full"></div>

          <div className="bg-white w-full">
            <p className="mt-4 font-bold text-xl p-5">
              {"MIKE'S GROOMSMEN"}
              <span style={{ color: "#AAAAAA" }}>0</span>{" "}
            </p>
          </div>

          <div style={{ backgroundColor: "#EAE4DA" }} className="h-14 w-full"></div>

          <div className="h-14 w-full bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Guest;
