import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import FaqVendor from "../../components/layouts/pages/register/faqVendor";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import PhoneJson from "../../json/phoneCode.json";

const Register = () => {
  const [serviceOffering, setServiceOffering] = useState([{ id: "", serviceName: "" }]);
  const [openService, setOpenService] = useState(null);
  const optionRef = useRef(null);
  const selectRef = useRef(null);
  const [phoneCode, setPhoneCode] = useState("+65");
  const [openPhoneCode, setOpenPhoneCode] = useState(false);
  const [phoneCodeVendor, setPhoneCodeVendor] = useState("+65");
  const [openPhoneCodeVendor, setOpenPhoneCodeVendor] = useState(false);
  const [country, setCountry] = useState("Singapore");
  const [openCountry, setOpenCountry] = useState(false);

  const addServiceOffering = () => {
    if (serviceOffering.length < 5) {
      setServiceOffering([...serviceOffering, { id: "", serviceName: "" }]);
    }
  };

  const removeServiceOffering = (index) => {
    const newServiceOffering = [...serviceOffering];
    newServiceOffering.splice(index, 1);
    setServiceOffering(newServiceOffering);
  };

  const serviceOfferingChange = (item, index) => {
    const newServiceOffering = [...serviceOffering];
    newServiceOffering[index].id = item.id;
    newServiceOffering[index].serviceName = item.name;
    setServiceOffering(newServiceOffering);
  };

  const dummyServiceOffering = [
    {
      id: 1,
      name: "Service 1",
    },
    {
      id: 2,
      name: "Service 2",
    },
    {
      id: 3,
      name: "Service 3",
    },
    {
      id: 4,
      name: "Service 4",
    },
    {
      id: 5,
      name: "Service 5",
    },
    {
      id: 6,
      name: "Service 6",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionRef.current && !optionRef.current.contains(event.target) && selectRef.current && !selectRef.current.contains(event.target)) {
        setOpenService(null);
      }
    }
    // Bind the event listener
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [optionRef]);

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
          <div className="flex w-full mb-5">
            <p className="text-2xl font-cagily">Vendor Information</p>
          </div>
          <form className="w-full">
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
                    <div className="relative mt-2 w-20 h-10 select-none">
                      <div
                        onClick={() => setOpenPhoneCodeVendor(!openPhoneCodeVendor)}
                        className="w-full h-full bg-white flex justify-center items-center cursor-pointer"
                      >
                        <p>{phoneCodeVendor}</p>
                      </div>
                      {openPhoneCodeVendor && (
                        <div className="absolute select-none top-13 px-3 py-2 space-y-2 bg-white rounded-md shadow-lg z-20 animate-fade-in-down max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-bg-primary scrollbar-track-gray-200">
                          {PhoneJson.countries.map((item, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setPhoneCodeVendor(item.code);
                                setOpenPhoneCodeVendor(false);
                              }}
                              className="px-2 py-1 w-60 flex items-center cursor-pointer hover:bg-gray-200 rounded-md"
                            >
                              <div className="w-1/4 mr-2 border-r border-r-bg-primary">
                                <p>{item.code}</p>
                              </div>
                              <div className="w-3/4">
                                <p>{item.name}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <input type="number" className="ml-2 w-full h-10 mt-2 outline-none py-2 px-2" required></input>
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
                <div className="w-full font-medium">
                  <p>BUILDING NAME</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="w-full font-medium">
                  <p>STREET ADDRESS 1</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
                <div className="w-full font-medium">
                  <p>STREET ADDRESS 2</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
                <div className="w-full font-medium">
                  <p>STREET ADDRESS 3</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="  w-full font-medium">
                  <p>COUNTRY *</p>
                  <div className="relative mt-2 w-full h-10 select-none">
                    <div onClick={() => setOpenCountry(!openCountry)} className="w-full h-full bg-white flex px-2 items-center cursor-pointer">
                      <p>{country ? country : "Select Country"}</p>
                      <div className="absolute right-2 top-0 h-full flex items-center">
                        <BsChevronDown size={13} />
                      </div>
                    </div>
                    {openCountry && (
                      <div className="absolute top-13 px-3 py-2 space-y-2 bg-white rounded-md shadow-lg z-20 animate-fade-in-down max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-bg-primary scrollbar-track-gray-200">
                        {PhoneJson.countries.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setCountry(item.name);
                              setOpenCountry(false);
                            }}
                            className="px-2 py-1 cursor-pointer hover:bg-gray-200 rounded-md"
                          >
                            <p>{item.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full font-medium">
                  <p>CITY *</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
                <div className="w-full font-medium">
                  <p>STATE / REGION</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="md:w-1/2 w-full font-medium">
                  <p>POSTCODE</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
                <div className="md:w-1/2 w-full font-medium">
                  <p>WEBSITE</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2"></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2">
                <div className="w-full">
                  <div className="mt-1 font-medium">
                    <p>NATURE OF PRIMARY SERVICE OFFERING (MAX. 5, SEPARATE WITH COMMA) *</p>
                  </div>
                  <div className="space-y-2 select-none">
                    {serviceOffering.map((item, index) => (
                      <div key={index} className="flex md:space-x-2 w-full flex-col md:flex-row">
                        <div className="w-full font-medium relative">
                          <div
                            ref={selectRef}
                            onClick={() => setOpenService(openService == index ? null : index)}
                            className="mt-2 w-full h-10 bg-white cursor-pointer flex px-2 items-center relative"
                          >
                            <p className="font-medium">{item.serviceName ? item.serviceName : "Select Service"}</p>
                            <div className="absolute right-2 top-0 h-full flex items-center">
                              <BsChevronDown size={13} />
                            </div>
                          </div>
                          {openService == index && (
                            <div
                              ref={optionRef}
                              className="absolute top-13 px-1 py-2 space-y-2 bg-white rounded-md shadow-lg z-20 animate-fade-in-down max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-bg-primary scrollbar-track-gray-200"
                            >
                              {dummyServiceOffering.map((xitem, xindex) => (
                                <div key={index} className="px-4 py-1 cursor-pointer hover:bg-gray-200 rounded-md">
                                  <p
                                    onClick={() => {
                                      serviceOfferingChange(xitem, index);
                                      setOpenService(null);
                                    }}
                                    key={xindex}
                                  >
                                    {xitem.name}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="w-full font-medium">
                          {index === 0 ? (
                            <div
                              onClick={() => addServiceOffering()}
                              className="text-white bg-bg-primary hover:bg-bg-primary-darker mt-2 h-10 w-full cursor-pointer flex rounded-md justify-center items-center"
                            >
                              <AiFillPlusCircle size={25} />
                              <p className="text-center text-sm ml-1">SECONDARY SERVICE OFFERING</p>
                            </div>
                          ) : (
                            <div
                              onClick={() => removeServiceOffering(index)}
                              className="bg-bg-primary hover:bg-bg-primary-darker mt-2 h-10 w-12 flex justify-center items-center cursor-pointer rounded-md text-white"
                            >
                              <AiFillMinusCircle size={25} />
                            </div>
                          )}
                        </div>
                        <div className="w-full font-normal">
                          {index === 0 && (
                            <p className="italic">You can add additional service offerings if you are able to offer more than 1 service types</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-2xl mt-14">
              <p className="font-cagily">Business Owner Information</p>
            </div>
            <div className="mt-5 w-full text-bg-primary">
              <div className="w-full flex flex-col md:flex-row md:space-x-2 mt-10">
                <div className="  w-full font-medium">
                  <p>FIRST NAME *</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
                <div className=" w-full font-medium">
                  <p>LAST NAME *</p>
                  <input type="text" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row md:space-x-2 mt-5">
                <div className="w-full font-medium">
                  <p>PHONE NUMBER *</p>
                  <div className="flex">
                    <div className="relative mt-2 w-20 h-10 select-none">
                      <div
                        onClick={() => setOpenPhoneCode(!openPhoneCode)}
                        className="w-full h-full bg-white flex justify-center items-center cursor-pointer"
                      >
                        <p>{phoneCode}</p>
                      </div>
                      {openPhoneCode && (
                        <div className="absolute select-none top-13 px-3 py-2 space-y-2 bg-white rounded-md shadow-lg z-20 animate-fade-in-down max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-bg-primary scrollbar-track-gray-200">
                          {PhoneJson.countries.map((item, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setPhoneCode(item.code);
                                setOpenPhoneCode(false);
                              }}
                              className="px-2 py-1 w-60 flex items-center cursor-pointer hover:bg-gray-200 rounded-md"
                            >
                              <div className="w-1/4 mr-2 border-r border-r-bg-primary">
                                <p>{item.code}</p>
                              </div>
                              <div className="w-3/4">
                                <p>{item.name}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <input type="number" className="ml-2 w-full h-10 mt-2 outline-none py-2 px-2" required></input>
                  </div>
                </div>
                <div className=" w-full font-medium">
                  <p>EMAIL ADDRESS *</p>
                  <input type="email" className="mt-2 w-full h-10 outline-none py-2 px-2" required></input>
                </div>
              </div>
              <div className="flex my-3 items-center">
                <input
                  className="mr-2 mt-3 h-5 w-5 border rounded-sm transition duration-200 align-top"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <div className="md:w-3/4 mt-3 flex select-none">
                  <p>{`By clicking 'Sign Up', I agree to WeddingServ's `}</p>
                  <p className="ml-1 font-semibold hover:underline cursor-pointer">Privacy</p>
                  <p className="ml-1">and</p>
                  <p className="ml-1 font-semibold hover:underline cursor-pointer">{"Terms & Conditions"}</p>
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
