import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";

const Master = ({ children }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [visible, setVisible] = useState(false);

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

export default Master;
