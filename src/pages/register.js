import Head from "next/head";
import React from "react";
import PlatformChecklist from "../components/layouts/pages/register/platformChecklist";

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
      <div className="py-10 px-5 bg-bg-serenade text-bg-primary">
        <div className="flex flex-col items-center">
          <p className="text-2xl">So you said Yes - Congrats!</p>
          <p className="text-xl">We cant wait to help you get started!</p>
        </div>
        <form>
          <div className="mt-5 w-full md:flex md:justify-center">
            <div className="md:w-2/3">
              <div className="md:flex md:space-x-2 mt-5">
                <div className="md:w-1/2">
                  <div>
                    <p className="font-semibold text-bg-eunry">BRIDE'S NAME *</p>
                    <div className="flex space-x-2">
                      <input type="text" className="w-full outline-none py-2 px-2" placeholder="First Name" required />
                      <input type="text" className="w-full outline-none py-2 px-2" placeholder="Last Name" required />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div>
                    <p className="font-semibold">GROOM'S NAME *</p>
                    <div className="flex space-x-2">
                      <input type="text" className="w-full outline-none py-2 px-2" placeholder="First Name" required />
                      <input type="text" className="w-full outline-none py-2 px-2" placeholder="Last Name" required />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex md:space-x-2 mt-5">
                <div className="md:w-1/2">
                  <div>
                    <p className="font-semibold">EMAIL ADDRESS *</p>
                    <input type="email" className="w-full outline-none py-2 px-2" required />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div>
                    <p className="font-semibold">WEDDING DATE *</p>
                    <input type="date" className="w-full outline-none py-2 px-2" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-semibold mb-3">HOW DID YOU HEAR ABOUT US?</p>
                <PlatformChecklist />
              </div>
              <div className="mt-5">
                <p className="text-xl">Almost There!</p>
                <div className="md:flex">
                  <p className="font-medium">Create an account, so we can save your preferences.&nbsp;</p>
                  <p>
                    Already have an account? <span className="cursor-pointer hover:underline">Login.</span>
                  </p>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="md:flex md:w-1/2 items-center">
                    <div className="md:w-1/4">
                      <p>Email Address</p>
                    </div>
                    <div className="md:w-3/4">
                      <input type="text" className="w-full outline-none py-2 px-2" required />
                    </div>
                  </div>
                  <div className="md:flex md:w-1/2 items-center">
                    <div className="md:w-1/4">
                      <p>Password</p>
                    </div>
                    <div className="md:w-3/4">
                      <input type="password" className="w-full outline-none py-2 px-2" required />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-bg-primary hover:bg-bg-primary-darker px-7 py-2 mt-5 rounded-md text-white">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
