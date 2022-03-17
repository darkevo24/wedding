import Head from "next/head";
import React from "react";

const Register = () => {
  return (
    <>
      <Head>
        <title>WeddingPlatform - Register</title>
      </Head>
      <div className="w-full h-96 bg-bg-wedding-content bg-cover object-cover bg-center">
        <div data-aos="fade-right" className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-8 flex flex-col items-center space-y-3 text-white">
            <p className="text-4xl">User Registration</p>
          </div>
        </div>
      </div>
      <div className="py-5 px-5 bg-bg-serenade text-bg-primary">
        <div className="flex flex-col items-center">
          <p className="text-2xl">So you said Yes - Congrats!</p>
          <p className="text-xl">We cant wait to help you get started!</p>
        </div>
        <form>
          <div className="mt-5 w-full">
            <div className="flex space-x-2">
              <div className="w-1/2">
                <div>
                  <p>BRIDE'S NAME *</p>
                  <div className="flex space-x-2">
                    <input type="text" className="w-full" />
                    <input type="text" className="w-full" />
                  </div>
                </div>
                <div>
                  <p>EMAIL ADDRESS *</p>
                  <input type="text" className="w-full" />
                </div>
              </div>
              <div className="w-1/2">
                <div>
                  <p>BRIDE'S NAME *</p>
                  <div className="flex space-x-2">
                    <input type="text" className="w-full" />
                    <input type="text" className="w-full" />
                  </div>
                </div>
                <div>
                  <p>WEDDING DATE *</p>
                  <input type="text" className="w-full" />
                </div>
              </div>
            </div>
            <div>
              <p>HOW DID YOU HEAR ABOUT US?</p>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center">
                    <input type="checkbox" id="billboard" />
                    <label for="billboard" className="ml-2">
                      MRT/Billboard
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="tv" />
                    <label for="tv" className="ml-2">
                      TV
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="google" />
                    <label for="google" className="ml-2">
                      Google
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <input type="checkbox" id="instagram" />
                    <label for="instagram" className="ml-2">
                      Instagram
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="facebook" />
                    <label for="facebook" className="ml-2">
                      Facebook
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="pinterest" />
                    <label for="pinterest" className="ml-2">
                      Pinterest
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <input type="checkbox" id="friend" />
                    <label for="friend" className="ml-2">
                      Friend or Family
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="tiktok" />
                    <label for="tiktok" className="ml-2">
                      Tik Tok
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="podcast" />
                    <label for="podcast" className="ml-2">
                      Podcast
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <input type="checkbox" id="other" />
                    <label for="other" className="ml-2">
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>Almost There!</p>
              <div className="flex">
                <p>Create an account, so we can save your preferences.</p>&nbsp;
                <p>
                  Already have an account? <span className="cursor-pointer hover:underline">Login.</span>
                </p>
              </div>
              <div>
                <div className="flex">
                  <p>Email Address</p>
                  <input type="text" name="" id="" />
                </div>
                <div className="flex">
                  <p>Password</p>
                  <input type="password" name="" id="" />
                </div>
              </div>
            </div>
            <button type="submit" className="bg-bg-primary hover:bg-bg-dark-grey px-7 py-2 mt-5 rounded-md text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
