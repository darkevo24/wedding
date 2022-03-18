import Head from "next/head";
import React from "react";
import FaqVendor from "../../components/layouts/pages/register/faqVendor";

const Register = () => {
  return (
    <>
      <Head>
        <title>WeddingPlatform | Vendor - Register</title>
      </Head>
      <div className="w-full h-96 bg-bg-wedding-content bg-cover object-cover bg-center">
        <div data-aos="fade-right" className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-8 flex flex-col items-center space-y-3 text-white">
            <p className="text-4xl">Vendor Registration</p>
          </div>
        </div>
      </div>
      <div className="py-10 px-10 bg-bg-romance text-bg-primary">
        <div className="md:w-2/3 m-auto">
        <p className="text-3xl">Vendor Information</p>
        <form>
          <div className="mt-5 w-full text-bg-primary">
            <div className="w-full  flex flex-col sm:flex-row">
              <div className="m-2  w-full font-bold">
                <p>VENDOR NAME *</p>
                <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
              <div className="m-2 w-full font-bold">
                <p>REGISTERED NO (UEN OR OTHER ID) *</p>
                <input type="number" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
            </div>
            <div className="w-full  flex flex-col md:flex-row">
              <div className="m-2  w-full font-bold">
                <p>PHONE NUMBER *</p>
                <div className="flex">
                  <select className="mt-2 w-20 h-10 bg-white flex justify-center items-center">
                    <option value="65">+65</option>
                  </select>
                  <input type="tel" className="ml-2 w-full h-10 mt-2 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="m-2 w-full font-bold">
                <p>EMAIL ADDRESS *</p>
                <input type="email" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
            </div>
            <div className="w-full  flex flex-col md:flex-row">
              <div className="m-2  w-full font-bold flex">
                <div className="w-28 lg:w-full">
                  <p>BLK NO. *</p>
                  <input type="number" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
                <div className="w-full ml-4">
                  <p>UNIT NO./HOUSE NO.</p>
                  <input type="number" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="m-2 w-full font-bold">
                <p>BUILDING NAME</p>
                <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
            </div>
            <div className="w-full  flex flex-col md:flex-row">
              <div className="m-2  w-full font-bold">
                <p>STREET ADDRESS 1</p>
                <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
              <div className="m-2 w-full font-bold">
                <p>STREET ADDRESS 2</p>
                <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
            </div>
            <div className="w-full  flex flex-col md:flex-row">
              <div className="m-2  w-full font-bold">
                <p>COUNTRY *</p>
                <select className="mt-2 w-full h-10">
                  <option selected hidden>
                    Select country
                  </option>
                </select>
              </div>
              <div className="m-2 w-full font-bold">
                <p>CITY *</p>
                <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
              <div className="m-2 w-full font-bold">
                <p>STATE / REGION</p>
                <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
            </div>
            <div className="w-full  flex flex-col md:flex-row">
              <div className="m-2 w-full font-bold">
                <p>WEBSITE</p>
                <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
            </div>
            <div className="w-full  flex flex-col md:flex-row">
              <div className="w-full">
                <div className=" ml-2 mt-1 font-bold">
                  <p>NATURE OF PRIMARY SERVICE OFFERING (MAX. 5,SEPERATE WITH COMMA) *</p>
                </div>
                <div className="flex w-full flex-col md:flex-row">
                  <div className="m-2  w-full font-bold">
                    <select className="mt-2 w-full h-10 align-center">
                      <option selected disabled hidden>
                        Hair,Makeup,Gowns & Suits
                      </option>
                    </select>
                  </div>
                  <div className="m-2 w-full font-bold">
                    <div className="text-white bg-bg-primary hover:bg-bg-primary-darker mt-2 w-full h-10 flex justify-center items-center">
                      <h3>+ SECONDAY SERVICE OFFERING</h3>
                    </div>
                  </div>
                  <div className="m-2 w-full ">
                    <p>You can add additional service offerings if you are able to offer more than 1 service types</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-3xl my-6">
            <p>Business Owner Information</p>
          </div>
          <div className="mt-5 w-full text-bg-primary">
            <div className="w-full  flex flex-col sm:flex-row">
              <div className="m-2  w-full font-bold">
                <p>FIRST NAME *</p>
                <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
              <div className="m-2 w-full font-bold">
                <p>LAST NAME *</p>
                <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
            </div>
            <div className="w-full  flex flex-col md:flex-row">
              <div className="m-2  w-full font-bold">
                <p>PHONE NUMBER *</p>
                <div className="flex">
                  <select className="mt-2 w-20 h-10 bg-white flex justify-center items-center">
                    <option value="65">+65</option>
                  </select>
                  <input type="tel" className="ml-2 w-full h-10 mt-2 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="m-2 w-full font-bold">
                <p>EMAIL ADDRESS *</p>
                <input type="email" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
              </div>
            </div>
            <div className="text-white mt-4">
              <button className="bg-bg-primary w-40 h-8 m-1 font-bold rounded-sm hover:bg-bg-primary-darker">Register</button>
            </div>
          </div>
        </form>
        </div>
      </div>

      <FaqVendor />
    </>
  );
};

export default Register;
