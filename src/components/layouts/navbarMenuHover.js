import React from "react";

const NavbarMenuHover = ({ menu }) => {
  return (
    <>
      {menu === "planWedding" && (
        <div
          className={
            "absolute -right-1/2 top-5 z-20 bg-transparent cursor-pointer " + (menu === "planWedding" ? "inline animate-fade-in-down" : "hidden")
          }
        >
          <div className={"bg-white h-20 w-60 rounded-md shadow-lg mt-4 cursor-default"}>
            <p>Plan a Wedding</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMenuHover;
