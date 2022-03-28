import React, { useState } from "react";

const PlatformChecklist = () => {
  const [showOther, setShowOther] = useState(false);
  return (
    <>
      <div className="md:flex w-5/6 space-x-16 hidden">
        <div className="space-y-2">
          <div className="flex items-center space-x-5">
            <input
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label htmlFor="billboard" className="ml-2 select-none font-medium text-bg-charcoal">
              MRT/Billboard
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="tv"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="tv" className="ml-2 select-none font-medium text-bg-charcoal">
              TV
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="google"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="google" className="ml-2 select-none font-medium text-bg-charcoal">
              Google
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="instagram"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="instagram" className="ml-2 select-none font-medium text-bg-charcoal">
              Instagram
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="facebook"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="facebook" className="ml-2 select-none font-medium text-bg-charcoal">
              Facebook
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="pinterest"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="pinterest" className="ml-2 select-none font-medium text-bg-charcoal">
              Pinterest
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="friend"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="friend" className="ml-2 select-none font-medium text-bg-charcoal">
              Friend or Family
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="tiktok"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="tiktok" className="ml-2 select-none font-medium text-bg-charcoal">
              Tik Tok
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="podcast"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="podcast" className="ml-2 select-none font-medium text-bg-charcoal">
              Podcast
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="other"
              onChange={() => setShowOther(!showOther)}
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="other" className="ml-2 select-none font-medium text-bg-charcoal">
              Other
            </label>
          </div>
          {showOther && <input className="p-2" placeholder="Other...." />}
        </div>
      </div>

      <div className="md:hidden flex justify-between">
        <div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="billboardMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="billboardMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              MRT/Billboard
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="tvMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="tvMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              TV
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="googleMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="googleMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              Google
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="instagramMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="instagramMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              Instagram
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="facebookMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="facebookMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              Facebook
            </label>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="pinterestMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="pinterestMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              Pinterest
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="friendMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="friendMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              Friend or Family
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="tiktokMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="tiktokMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              Tik Tok
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="podcastMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="podcastMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              Podcast
            </label>
          </div>
          <div className="flex items-center space-x-5">
            <input
              type="checkbox"
              id="otherMobile"
              className="appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <label htmlFor="otherMobile" className="ml-2 select-none font-medium text-bg-charcoal">
              Other
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformChecklist;
