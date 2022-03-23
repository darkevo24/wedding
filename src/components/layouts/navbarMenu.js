import React, { useState } from "react";

const NavbarMenu = () => {
  const [planWedding, setPlanWedding] = useState(false);
  const [vendor, setVendor] = useState(false);
  const [guest, setGuest] = useState(false);
  const [inspiration, setInspiration] = useState(false);
  const [tips, setTips] = useState(false);

  return (
    <>
      <div className="relative" onMouseEnter={(e) => setPlanWedding(true)} onMouseLeave={(e) => setPlanWedding(false)}>
        <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Plan a Wedding</p>
        <div className={"absolute -right-1/2 top-5 z-20 bg-transparent cursor-pointer " + (planWedding ? "inline animate-fade-in-down" : "hidden")}>
          <div className={"bg-white h-20 w-60 rounded-md shadow-lg mt-4 cursor-default"}>
            <p>Plan a Wedding</p>
          </div>
        </div>
      </div>
      <div className="relative" onMouseEnter={(e) => setVendor(true)} onMouseLeave={(e) => setVendor(false)}>
        <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Vendor</p>
        <div className={"absolute -right-1/2 top-5 z-20 bg-transparent cursor-pointer " + (vendor ? "inline animate-fade-in-down" : "hidden")}>
          <div className={"bg-white h-20 w-60 rounded-md shadow-lg mt-4 cursor-default"}>
            <p>Vendor</p>
          </div>
        </div>
      </div>
      <div className="relative" onMouseEnter={(e) => setGuest(true)} onMouseLeave={(e) => setGuest(false)}>
        <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Guest List</p>
        <div className={"absolute -right-1/2 top-5 z-20 bg-transparent cursor-pointer " + (guest ? "inline animate-fade-in-down" : "hidden")}>
          <div className={"bg-white h-20 w-60 rounded-md shadow-lg mt-4 cursor-default"}>
            <p>guest</p>
          </div>
        </div>
      </div>
      <div className="relative" onMouseEnter={(e) => setInspiration(true)} onMouseLeave={(e) => setInspiration(false)}>
        <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Inspiration</p>
        <div className={"absolute -right-1/2 top-5 z-20 bg-transparent cursor-pointer " + (inspiration ? "inline animate-fade-in-down" : "hidden")}>
          <div className={"bg-white h-20 w-60 rounded-md shadow-lg mt-4 cursor-default"}>
            <p>Inspiration</p>
          </div>
        </div>
      </div>
      <div className="relative" onMouseEnter={(e) => setTips(true)} onMouseLeave={(e) => setTips(false)}>
        <p className="font-medium text-lg cursor-pointer select-none hover:text-bg-primary">Helpful Tips</p>
        <div className={"absolute -right-1/2 top-5 z-20 bg-transparent cursor-pointer " + (tips ? "inline animate-fade-in-down" : "hidden")}>
          <div className={"bg-white h-20 w-60 rounded-md shadow-lg mt-4 cursor-default"}>
            <p>Tips</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
