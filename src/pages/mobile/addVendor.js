import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function AddVendor() {
  return (
    <div>
      <div className="lg:hidden flex flex-col lg:flex-row mb-24">
        <div className=" p-10 w-full lg:w-4/5">
          <div className="flex">
            <input
              className="rounded-l-md outline-none px-5 py-2 w-full lg:w-80"
              type="text"
              placeholder="Look for Vendors"
              style={{ backgroundColor: "#EAE4DA", placeholder: "#AAAAAA" }}
            ></input>
            <input
              className="outline-none px-5 py-2 w-full lg:w-40"
              type="text"
              placeholder="Where"
              style={{ backgroundColor: "#EAE4DA", placeholder: "#AAAAAA" }}
            ></input>
            <div className="w-1/3 sm:w-10 h-10 bg-bg-primary rounded-r-md flex justify-center items-center">
              <SearchIcon style={{ color: "white", width: "100%", height: "80%" }}></SearchIcon>
            </div>
          </div>
          <div className="hidden lg:flex">
            <div className="flex">
              <p className="rounded-md border-2 p-1 m-1">Location</p>
            </div>
            <div className="flex">
              <p className="rounded-md border-2 p-1 m-1">Photography</p>
            </div>
            <div className="flex">
              <p className="rounded-md border-2 p-1 m-1">Availability</p>
            </div>
            <div className="flex">
              <p className="rounded-md border-2 p-1 m-1">Photo Format</p>
            </div>
            <div className="flex">
              <p className="rounded-md border-2 p-1 m-1">Post Code</p>
            </div>
            <div className="flex">
              <p className="rounded-md border-2 p-1 m-1">All filters</p>
            </div>
          </div>
        </div>
        <div className="lg:flex p-5 flex flex-row-reverse justify-center lg:flex-col items-end">
          <button className="bg-bg-primary text-white font-bold w-8 h-8 ml-2">+</button>
          <button className="bg-bg-primary text-white font-bold w-52 h-8 mt-5">Shortlisted Vendors</button>
        </div>
      </div>
    </div>
  );
}
