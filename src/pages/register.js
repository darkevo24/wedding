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
            <p>form</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
