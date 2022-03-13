import React from "react";

const DreamTeam = () => {
  return (
    <div className="bg-bg-romance px-10 py-16 text-bg-primary">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="font-normal text-3xl">Find Your Dream Team</p>
          <div className="flex flex-col items-center mt-2">
            <p>Streamline your search of pre-screened vendors with highly personalized preferences.</p>
            <p>Handpicked recs in your style, budget, availability and more.</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-3">
          <div>
            <input type="text" />
          </div>
          <div className="mt-2">
            <p className="font-light text-sm">Wedding Venues, Photographers, DJs,Hair & Makeup, Planners, Caterers, Florists and more</p>
          </div>
        </div>
        <div className="border-t-0.5 border-bg-soapstone w-5/6 my-10"></div>
        <div className="flex w-full space-x-2">
          <div className="flex flex-col space-y-2 items-center text-center w-1/4">
            <p>icon</p>
            <p className="font-light">Streamlines & Highly Personalized Search</p>
          </div>
          <div className="flex flex-col space-y-2 items-center text-center w-1/4">
            <p>icon</p>
            <p className="font-light">Checklist to guide your planning</p>
          </div>
          <div className="flex flex-col space-y-2 items-center text-center w-1/4">
            <p>icon</p>
            <p className="font-light">Milestone payments lets you save as you go towards your wedding</p>
          </div>
          <div className="flex flex-col space-y-2 items-center text-center w-1/4">
            <p>icon</p>
            <p className="font-light">Last milestone payment held until service is delivered / performed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamTeam;
