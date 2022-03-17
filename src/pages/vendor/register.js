import Head from "next/head";
import React from "react";
import FaqVendor from "../../components/layouts/pages/register/faqVendor";

const Register = () => {
  return (
    <>
      <Head>
        <title>WeddingPlatform - Register Vendor</title>
      </Head>
      <div className="w-full h-96 bg-bg-wedding-content bg-cover object-cover bg-center">
        <div data-aos="fade-right" className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-8 flex flex-col items-center space-y-3 text-white">
            <p className="text-4xl">Vendor Registration</p>
          </div>
        </div>
      </div>
      <div className="py-5 px-5 bg-bg-romance text-bg-primary">
        <p className="text-2xl">Vendor Information</p>
        <form>
          <div className="mt-5 w-full">
            <p>add form here</p>
          </div>
        </form>
      </div>

      <FaqVendor />
    </>
  );
};

export default Register;
