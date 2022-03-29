import { useRouter } from "next/router";
import React, { useState } from "react";
import NavbarMenuHover from "./navbarMenuHover";

const NavbarMenu = () => {
  const route = useRouter();
  const { pathname } = route;

  const [planWedding, setPlanWedding] = useState(false);
  const [vendor, setVendor] = useState(false);
  const [guest, setGuest] = useState(false);
  const [inspiration, setInspiration] = useState(false);
  const [tips, setTips] = useState(false);

  return (
    <div className="w-7/12 flex justify-center space-x-6">
      <div
        className="relative"
        onClick={() => route.push("/plan-wedding")}
        onMouseEnter={(e) => setPlanWedding(true)}
        onMouseLeave={(e) => setPlanWedding(false)}
      >
        <p
          className={
            "font-worksans-semibold text-lg cursor-pointer select-none hover:text-bg-primary " +
            (pathname.includes("plan-wedding") && "text-bg-primary")
          }
        >
          Plan a Wedding
        </p>
        {planWedding && <NavbarMenuHover menu="planWedding" />}
      </div>
      <div className="relative" onClick={() => route.push("/vendor")} onMouseEnter={(e) => setVendor(true)} onMouseLeave={(e) => setVendor(false)}>
        <p
          className={
            "font-worksans-semibold text-lg cursor-pointer select-none hover:text-bg-primary " + (pathname.includes("vendor") && "text-bg-primary")
          }
        >
          Vendor
        </p>
        {vendor && <NavbarMenuHover menu="vendor" />}
      </div>
      <div className="relative" onClick={() => route.push("/guest-list")} onMouseEnter={(e) => setGuest(true)} onMouseLeave={(e) => setGuest(false)}>
        <p
          className={
            "font-worksans-semibold text-lg cursor-pointer select-none hover:text-bg-primary " +
            (pathname.includes("guest-list") && "text-bg-primary")
          }
        >
          Guest List
        </p>
        {guest && <NavbarMenuHover menu="guest" />}
      </div>
      <div
        className="relative"
        onClick={() => route.push("/inspiration")}
        onMouseEnter={(e) => setInspiration(true)}
        onMouseLeave={(e) => setInspiration(false)}
      >
        <p
          className={
            "font-worksans-semibold text-lg cursor-pointer select-none hover:text-bg-primary " +
            (pathname.includes("inspiration") && "text-bg-primary")
          }
        >
          Inspiration
        </p>
        {inspiration && <NavbarMenuHover menu="inspiration" />}
      </div>
      <div className="relative" onClick={() => route.push("/helpful-tips")} onMouseEnter={(e) => setTips(true)} onMouseLeave={(e) => setTips(false)}>
        <p
          className={
            "font-worksans-semibold text-lg cursor-pointer select-none hover:text-bg-primary " +
            (pathname.includes("helpful-tips") && "text-bg-primary")
          }
        >
          Helpful Tips
        </p>
        {tips && <NavbarMenuHover menu="tips" />}
      </div>
    </div>
  );
};

export default NavbarMenu;
