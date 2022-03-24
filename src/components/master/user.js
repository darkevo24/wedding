import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";
import { useRouter } from "next/router";
import UserMenu from "../layouts/userMenu";

const MasterUser = ({ children }) => {
  const route = useRouter();
  const currentRoute = route.pathname;
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [visible, setVisible] = useState(false);
  const isLoginRedux = useSelector((state) => state.authToken.userData);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const authRoute = ["/login", "/register"];

    // check if user not logged in, cannot access user page
    if (!isLoginRedux && !token && currentRoute.includes("/user")) {
      route.replace("/");
    }
    // check if user not logged in, user can acces auth page
    else if (!isLoginRedux && !token && authRoute.includes(currentRoute)) {
      route.replace(currentRoute);
    }
    // check if user logged in, user cannot access auth page
    else if ((isLoginRedux || token) && authRoute.includes(currentRoute)) {
      route.push("/user/vendor-management");
    } else {
      // route.replace("/user");
    }
  }, [currentRoute]);

  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });

    window.addEventListener("scroll", (e) => {
      // window.scrollY > 160 ? scrollTop?.current?.style?.display = "inline-block" : scrollTop?.current?.style?.display = "none";
      window.scrollY > 160 ? setVisible(true) : setVisible(false);
    });
  }, [position]);

  return (
    <div className="h-screen">
      <Navbar />
      {currentRoute.includes("/user") && <UserMenu />}
      <div>{children}</div>
      <Footer />
      {visible && (
        <div className="fixed bottom-0 right-0 mr-4 mb-4" onClick={() => setPosition({ top: 0, left: 0 })}>
          <div className="bg-bg-primary-darker px-4 py-3 rounded-md cursor-pointer">
            <IoIosArrowUp className="text-white text-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterUser;
