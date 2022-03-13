import React, { useEffect, useRef, useState } from "react";
import {IoIosArrowUp} from "react-icons/io";
import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";

const Master = ({ children }) => {
  const scrollTop = useRef();
  const [position, setPosition] = useState({ top: 0, left: 0 });
  
  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });

    window.addEventListener("scroll", (e) => {
      window.scrollY > 200 ? (scrollTop?.current?.style?.display = "inline-block") : (scrollTop?.current?.style?.display = "none");
    });
  });

  return (
    <div className="h-screen">
      <Navbar />
      <div>{children}</div>
      <Footer />
      <div className="fixed hidden bottom-0 right-0 mr-4 mb-4" ref={scrollTop} onClick={() => setPosition({ top: 0, left: 0 })}>
        <div className="bg-bg-primary-darker px-4 py-3 rounded-md cursor-pointer">
          <IoIosArrowUp className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Master;
