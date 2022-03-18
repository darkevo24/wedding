import React from "react";

const PlatformChecklist = () => {
  return (
    <>
      <div className="md:flex w-3/4 justify-between hidden">
        <div>
          <div className="flex items-center">
            <input type="checkbox" id="billboard" className="w-4 h-4 rounded-md" />
            <label htmlFor="billboard" className="ml-2 select-none">
              MRT/Billboard
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="tv" className="w-4 h-4 rounded-md" />
            <label htmlFor="tv" className="ml-2 select-none">
              TV
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="google" className="w-4 h-4 rounded-md" />
            <label htmlFor="google" className="ml-2 select-none">
              Google
            </label>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <input type="checkbox" id="instagram" className="w-4 h-4 rounded-md" />
            <label htmlFor="instagram" className="ml-2 select-none">
              Instagram
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="facebook" className="w-4 h-4 rounded-md" />
            <label htmlFor="facebook" className="ml-2 select-none">
              Facebook
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="pinterest" className="w-4 h-4 rounded-md" />
            <label htmlFor="pinterest" className="ml-2 select-none">
              Pinterest
            </label>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <input type="checkbox" id="friend" className="w-4 h-4 rounded-md" />
            <label htmlFor="friend" className="ml-2 select-none">
              Friend or Family
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="tiktok" className="w-4 h-4 rounded-md" />
            <label htmlFor="tiktok" className="ml-2 select-none">
              Tik Tok
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="podcast" className="w-4 h-4 rounded-md" />
            <label htmlFor="podcast" className="ml-2 select-none">
              Podcast
            </label>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <input type="checkbox" id="other" className="w-4 h-4 rounded-md" />
            <label htmlFor="other" className="ml-2 select-none">
              Other
            </label>
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-between">
        <div>
          <div className="flex items-center">
            <input type="checkbox" id="billboardMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="billboardMobile" className="ml-2 select-none">
              MRT/Billboard
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="tvMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="tvMobile" className="ml-2 select-none">
              TV
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="googleMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="googleMobile" className="ml-2 select-none">
              Google
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="instagramMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="instagramMobile" className="ml-2 select-none">
              Instagram
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="facebookMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="facebookMobile" className="ml-2 select-none">
              Facebook
            </label>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <input type="checkbox" id="pinterestMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="pinterestMobile" className="ml-2 select-none">
              Pinterest
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="friendMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="friendMobile" className="ml-2 select-none">
              Friend or Family
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="tiktokMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="tiktokMobile" className="ml-2 select-none">
              Tik Tok
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="podcastMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="podcastMobile" className="ml-2 select-none">
              Podcast
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="otherMobile" className="w-4 h-4 rounded-md" />
            <label htmlFor="otherMobile" className="ml-2 select-none">
              Other
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformChecklist;
