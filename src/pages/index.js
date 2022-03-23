import Head from "next/head";
import React, { useEffect } from "react";
import DreamTeam from "../components/layouts/pages/home/dreamTeam";
import ManageGuestList from "../components/layouts/pages/home/manageGuestList";
import OwnCouple from "../components/layouts/pages/home/ownCouple";
import PlanWedding from "../components/layouts/pages/home/planWedding";
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
        <div data-aos="fade-right" className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-8 flex flex-col items-center space-y-3 text-white">
            <p className="text-5xl font-cagily">Your Perfect Wedding Made Easy</p>
            <p className="text-lg font-cagily">Plan your wedding with your our free Comprehensive step by step checklist tool</p>
          </div>
          <div className="bg-bg-primary hover:bg-bg-primary-darker px-8 py-3 rounded-md cursor-pointer">
            <p className="text-white font-semibold text-lg">{"Get Started >"}</p>
          </div>
        </div>
      </div>
      <DreamTeam />
      <VendorSearch />
      <PlanWedding />
      {/* <OwnCouple /> */}
      <ManageGuestList />
    </>
  );
};

export default Home;
