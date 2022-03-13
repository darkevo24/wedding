import Head from "next/head";
import React, { useEffect } from "react";
import DreamTeam from "../components/layouts/pages/home/dreamTeam";
import VendorSearch from "../components/layouts/pages/home/vendorSearch";

const Home = () => {
  useEffect(() => {
    //
  }, []);

  return (
    <>
      <Head>
        <title>WeddingPlatform - Home</title>
      </Head>
      {/* banner section */}
      <div style={{ height: "85vh" }} className="w-full bg-bg-wedding bg-cover object-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-8 flex flex-col items-center space-y-3 text-white">
            <p className="text-5xl font-semibold">Your Perfect Wedding Made Easy</p>
            <p className="text-lg">Plan your wedding with your our free Comprehensive step by step checklist tool</p>
          </div>
          <div className="bg-bg-primary hover:bg-bg-primary-darker px-8 py-3 rounded-md cursor-pointer">
            <p className="text-white font-semibold text-lg">{"Get Started >"}</p>
          </div>
        </div>
      </div>
      <DreamTeam />
      <VendorSearch />
    </>
  );
};

export default Home;
