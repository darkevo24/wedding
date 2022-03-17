import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/images/logo-dark.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

const NavbarMobile = () => {
  const route = useRouter();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div className="md:hidden w-full py-3 px-2 justify-between items-center bg-slate-50 shadow-md">
        <div className="flex w-full justify-between items-center">
          <div className="text-bg-primary select-none">
            <FiMenu size={30} className="cursor-pointer" onClick={() => setMobileNav(!mobileNav)} />
          </div>
          <div onClick={() => route.push("/")}>
            <Image src={Logo} width={135} height={70} />
          </div>
          <div className="text-bg-primary">
            <AiOutlineSearch size={30} className="cursor-pointer" />
          </div>
        </div>

        {mobileNav && (
          <div className="mt-5">
            <div className="border-t py-2">
              <p>Plan a Wedding</p>
            </div>
            <div className="border-t py-2">
              <p>Vendor</p>
            </div>
            <div className="border-t py-2">
              <p>Website</p>
            </div>
            <div className="border-t py-2">
              <p>Guest List</p>
            </div>
            <div className="border-t py-2">
              <p>Inspiration</p>
            </div>
            <div className="border-t py-2">
              <p>Helpful Tips</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarMobile;
