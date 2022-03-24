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
            <p className="text-4xl font-cagily">Vendor Registration</p>
          </div>
        </div>
      </div>
      <div className="py-14 px-4 bg-bg-romance text-bg-primary w-full flex flex-col items-center">
        <div className="md:w-2/3 flex flex-col items-center">
          <div className="flex w-full">
            <p className="text-2xl font-cagily">Vendor Information</p>
          </div>
          <form>
            <div className="mt-5 w-full space-y-3 text-bg-primary">
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="w-full font-medium">
                  <p>VENDOR NAME *</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
                <div className="w-full font-medium">
                  <p>REGISTERED NO (UEN OR OTHER ID)</p>
                  <input type="number" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="w-full font-medium">
                  <p>PHONE NUMBER *</p>
                  <div className="flex">
                    <select className="mt-2 w-20 h-10 bg-white flex justify-center items-center">
                      <option value="65">+65</option>
                    </select>
                    <input type="tel" className="ml-2 w-full h-10 mt-2 outline-none py-2 px-2" required></input>
                  </div>
                </div>
                <div className="w-full font-medium">
                  <p>EMAIL ADDRESS *</p>
                  <input type="email" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="w-full font-medium flex space-x-2">
                  <div className="w-28 lg:w-full">
                    <p>BLK NO.</p>
                    <input type="number" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                  </div>
                  <div className="w-full">
                    <p>UNIT NO./HOUSE NO.</p>
                    <input type="number" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                  </div>
                </div>
                <div className=" w-full font-medium">
                  <p>BUILDING NAME</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="  w-full font-medium">
                  <p>STREET ADDRESS 1</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
                <div className=" w-full font-medium">
                  <p>STREET ADDRESS 2</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="  w-full font-medium">
                  <p>COUNTRY *</p>
                  <select className="mt-2 w-full h-10" required>
                    <option selected hidden>
                      Select country
                    </option>
                  </select>
                </div>
                <div className=" w-full font-medium">
                  <p>CITY *</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
                <div className=" w-full font-medium">
                  <p>STATE / REGION</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="w-full font-medium">
                  <p>WEBSITE</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="w-full">
                  <div className="mt-1 font-medium">
                    <p>NATURE OF PRIMARY SERVICE OFFERING (MAX. 5,SEPERATE WITH COMMA) *</p>
                  </div>
                  <div className="flex md:space-x-2 w-full flex-col md:flex-row">
                    <div className="w-full font-medium">
                      <select className="mt-2 w-full h-10 align-center" required>
                        <option selected disabled hidden>
                          Hair,Makeup,Gowns & Suits
                        </option>
                      </select>
                    </div>
                    <div className="w-full font-medium">
                      <div className="text-white bg-bg-primary hover:bg-bg-primary-darker mt-2 h-10 w-full cursor-pointer flex justify-center items-center">
                        <p className="text-center text-sm">+ SECONDAY SERVICE OFFERING</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <p>You can add additional service offerings if you are able to offer more than 1 service types</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-2xl mt-10">
              <p className="font-cagily">Business Owner Information</p>
            </div>
            <div className="mt-5 w-full text-bg-primary">
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="  w-full font-medium">
                  <p>FIRST NAME *</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
                <div className=" w-full font-medium">
                  <p>LAST NAME *</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="  w-full font-medium">
                  <p>PHONE NUMBER *</p>
                  <div className="flex">
                    <select className="mt-2 w-20 h-10 bg-white flex justify-center items-center">
                      <option value="65">+65</option>
                    </select>
                    <input type="tel" className="ml-2 w-full h-10 mt-2 outline-none py-2 px-2" required></input>
                  </div>
                </div>
                <div className=" w-full font-medium">
                  <p>EMAIL ADDRESS *</p>
                  <input type="email" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
              </div>
              <div className="text-white mt-8">
                <button type="submit" className="bg-bg-primary py-2 px-8 font-medium rounded-sm hover:bg-bg-primary-darker">
                  Register
                </button>
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
