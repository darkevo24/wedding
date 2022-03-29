import { CircularProgress, Snackbar } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import DayPicker from "react-day-picker";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import PlatformChecklist from "../components/layouts/pages/register/platformChecklist";
import { fetchApiRegister } from "../helper/fetchApi/user";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setOpenAlert, setErrorMessage } from "../redux/reducers/authToken";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

import Flower from "../../public/images/flower.png";
import Flower2 from "../../public/images/flower2.png";

const FORMAT = "dd-MMM-yyyy";

const Register = () => {
  const calendarRef = useRef(null);

  const route = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [openAlertLocal, setOpenAlertLocal] = useState(false);
  const [selectedDay, setSelectedDay] = useState();
  const [showDate, setShowDate] = useState(false);
  const [term, setTerm] = useState(false);
  const [errorMessageLocal, setErrorMessageLocal] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [weddingParams, setWeddingParams] = useState({
    // bride_first_name: "",
    // bride_last_name: "",
    // groom_first_name: "",
    // groom_last_name: "",
    // wedding_date: "",
    email: "",
    password: "",
  });

  const doRegister = () => {
    if (!term) {
      setErrorMessageLocal("Please check Privacy and Term of Conditions");
      setOpenAlertLocal(true);
      return;
    }

    if (!/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/.test(weddingParams.password)) {
      setErrorMessageLocal("Password must be have minimum eight characters, at least one uppercase letter, one lowercase letter and one number");
      setOpenAlertLocal(true);
      return;
    }
    if (weddingParams.password !== confirmPass) {
      setErrorMessageLocal("Password and Confirm Password must be same");
      setOpenAlertLocal(true);
      return;
    }

    setLoading(true);
    fetchApiRegister(weddingParams, (res) => {
      if (res.hasOwnProperty("resVal")) {
        dispatch(setErrorMessage("Please check your email and verify your account first!"));
        dispatch(setOpenAlert(true));
        route.push("/login");
      } else {
        setErrorMessageLocal(res.replace(/['"]+/g, ""));
        setOpenAlertLocal(true);
      }
      setLoading(false);
    });
  };

  return (
    <>
      <Head>
        <title>WeddingPlatform - Register</title>
      </Head>
      <div className="w-full h-96 bg-bg-wedding-content bg-cover object-cover bg-center">
        <div data-aos="fade-right" className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-8 flex flex-col items-center space-y-3 text-white">
            <p className="text-4xl font-cagily">User Registration</p>
          </div>
        </div>
      </div>
      <div className="py-10 px-5 bg-bg-serenade text-bg-charcoal relative">
        <div className="flex flex-col items-center text-bg-primary">
          <p className="text-2xl font-cagily">So you said Yes - Congrats!</p>
          <p className="text-xl font-cagily">{`We can't wait to help you get started!`}</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            doRegister();
          }}
        >
          <div className="mt-5 w-full md:flex md:justify-center">
            <div className="md:w-2/3">
              <div className="md:flex md:space-x-2 mt-5">
                <div className="md:w-1/2">
                  <div>
                    <p className="font-semibold hover:text-bg-eunry">{"BRIDE'S NAME"}</p>
                    <div className="flex space-x-2">
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, bride_first_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                        placeholder="First Name"
                      />
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, bride_last_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div>
                    <p className="font-semibold hover:text-bg-eunry">{"GROOM'S NAME"}</p>
                    <div className="flex space-x-2">
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, groom_first_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3 z-10"
                        placeholder="First Name"
                      />
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, groom_last_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3 z-10"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex md:space-x-2 mt-5">
                <div className="md:w-1/2">
                  <div className="relative">
                    <p className="font-semibold hover:text-bg-eunry">WEDDING DATE</p>
                    <div
                      onClick={() => {
                        setShowDate(!showDate);
                      }}
                      className="w-full outline-none py-2 px-2 rounded-sm mt-3 bg-white flex justify-between items-center"
                    >
                      <p className={!weddingParams.wedding_date && "text-slate-400"}>
                        {weddingParams.wedding_date ? weddingParams.wedding_date : "Select date"}
                      </p>
                      <AiOutlineDown className="text-bg-primary font-bold" />
                    </div>
                    <div className="bg-white absolute top-20">
                      {showDate && (
                        <DayPicker
                          onDayClick={(e) => {
                            setSelectedDay(e);
                            setShowDate(false);
                            setWeddingParams({ ...weddingParams, wedding_date: dateFnsFormat(e, FORMAT) });
                          }}
                          selectedDays={selectedDay}
                        />
                      )}
                    </div>
                    <p className="italic mt-2">You can always change this later if you need to.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="font-semibold mb-3">HOW DID YOU HEAR ABOUT US?</p>
                <PlatformChecklist />
              </div>
              <div className="mt-9">
                <p className="text-2xl font-cagily">Almost There!</p>
                <div className="md:flex">
                  <p className="font-bold">Create an account, so we can save your preferences.&nbsp;</p>
                  <p className="font-normal italic">
                    Already have an account? <span className="cursor-pointer text-bg-primary hover:underline">Login.</span>
                  </p>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="md:flex md:w-2/3 items-center">
                    <div className="md:w-1/4">
                      <p className="font-bold">Email Address</p>
                    </div>
                    <div className="md:w-3/4">
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, email: e.target.value })}
                        value={weddingParams.email}
                        type="text"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:flex md:w-2/3 items-center">
                    <div className="md:w-1/4">
                      <p className="font-bold">Password</p>
                      <p className="italic">(8 or more characters)</p>
                    </div>
                    <div className="md:w-3/4">
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, password: e.target.value })}
                        type="password"
                        placeholder="One uppercase letter, one lowercase letter and one number"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:flex md:w-2/3 justify-center items-center">
                    <div className="md:w-1/4 flex items-center">
                      <p className="font-bold">Confirm Password</p>
                    </div>
                    <div className="md:w-3/4">
                      <input
                        onChange={(e) => setConfirmPass(e.target.value)}
                        type="password"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex my-3">
                <input
                  className="mr-2 mt-3 appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="checkbox"
                  onChange={() => setTerm(!term)}
                  value={term}
                  id="flexCheckDefault"
                />
                <div className="md:w-3/4 mt-3 flex">
                  <p>{`By clicking 'Sign Up', I agree to WeddingServ's `}</p>
                  <p className="ml-1 font-semibold">Privacy</p>
                  <p className="ml-1">and</p>
                  <p className="ml-1 font-semibold">{"Terms & Conditions"}</p>
                </div>
              </div>
              <div className="md:flex items-center ">
                <div className="md:w-1/6 flex items-center">
                  <button type="submit" className="bg-bg-primary hover:bg-bg-primary-darker px-8 py-2 mt-5 rounded-md text-white">
                    {!loading ? "Sign Up" : <CircularProgress size={24} color="inherit" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="absolute right-0 top-32">
          <Image src={Flower2} />
        </div>

        <div className="absolute right-0 bottom-0">
          <Image src={Flower} />
        </div>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openAlertLocal}
          autoHideDuration={5000}
          onClose={() => setOpenAlertLocal(false)}
        >
          <div className="bg-bg-primary px-3 py-1 text-white rounded-md">
            <p className="text-xl">{errorMessageLocal}</p>
          </div>
        </Snackbar>
      </div>
    </>
  );
};

export default Register;
