import React from "react";
import Navbar from "../layouts/navbar";

const Master = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Master;
