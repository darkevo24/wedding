import { CircularProgress, Snackbar } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import PlatformChecklist from "../components/layouts/pages/register/platformChecklist";
import { fetchApiRegister } from "../helper/fetchApi/user";
import { fetchApiWeddingPost } from "../helper/fetchApi/wedding";

const Register = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [weddingParams, setWeddingParams] = useState({
    bride_first_name: "",
    bride_last_name: "",
    groom_first_name: "",
    groom_last_name: "",
    wedding_date: "",
    bride_prepare_location: "",
    phone: "",
    opt_photos_taken: false,
    opt_before_ceremony: true,
    ceremony_location: "",
    reception_location: "",
    coordinator: "",
    no_guests: "",
    guideline: "",
    is_religious: true,
    time_ceremony: "",
    start_date: "",
    end_date: "",
    time_reception: "",
  });

  const registerUser = (wedding_uuid) => {
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      setOpenAlert(true);
      return;
    }

    let params = {
      email: email,
      phone: phone,
      password: password,
      wedding_uuid: wedding_uuid,
    };

    fetchApiRegister(params, (res) => {
      if (res.hasOwnProperty("resVal")) {
        console.log(res.resVal);
      } else {
        setErrorMessage(res);
        setOpenAlert(true);
      }
      setLoading(false);
    });
  };

  const doRegister = () => {
    // setLoading(true);
    fetchApiWeddingPost(weddingParams, (res) => {
      if (res.hasOwnProperty("resVal")) {
        console.log(res.resVal);
        // registerUser("b97ffdbe-90c7-4882-a754-0d3866cb1f9d");
      } else {
        console.log(res);
      }
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
            <p className="text-4xl">User Registration</p>
          </div>
        </div>
      </div>
      <div className="py-10 px-5 bg-bg-serenade text-bg-primary">
        <div className="flex flex-col items-center">
          <p className="text-2xl">So you said Yes - Congrats!</p>
          <p className="text-xl">We cant wait to help you get started!</p>
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
                    <p className="font-semibold text-bg-eunry">{"BRIDE'S NAME *"}</p>
                    <div className="flex space-x-2">
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, bride_first_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2"
                        placeholder="First Name"
                        required
                      />
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, bride_last_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div>
                    <p className="font-semibold">{"GROOM'S NAME *"}</p>
                    <div className="flex space-x-2">
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, groom_first_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2"
                        placeholder="First Name"
                        required
                      />
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, groom_last_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2"
                        placeholder="Last Name"
                        required
                      />
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
                    <input
                      onChange={(e) => setWeddingParams({ ...weddingParams, wedding_date: e.target.value })}
                      type="date"
                      className="w-full outline-none py-2 px-2"
                    />
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
                  <div className="md:flex md:w-2/3 items-center">
                    <div className="md:w-1/4">
                      <p>Email Address</p>
                    </div>
                    <div className="md:w-3/4">
                      <input onChange={(e) => setEmail(e.target.value)} type="text" className="w-full outline-none py-2 px-2" required />
                    </div>
                  </div>
                  {/* <div className="md:flex md:w-2/3 items-center">
                    <div className="md:w-1/4">
                      <p>Phone</p>
                    </div>
                    <div className="md:w-3/4">
                      <input
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setWeddingParams({ ...weddingParams, phone: e.target.value });
                        }}
                        type="number"
                        className="w-full outline-none py-2 px-2"
                        required
                      />
                    </div>
                  </div> */}
                  <div className="md:flex md:w-2/3 items-center">
                    <div className="md:w-1/4">
                      <p>Password</p>
                    </div>
                    <div className="md:w-3/4">
                      <input onChange={(e) => setPassword(e.target.value)} type="password" className="w-full outline-none py-2 px-2" required />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-bg-primary hover:bg-bg-primary-darker px-8 py-2 mt-5 rounded-md text-white">
                {!loading ? "Submit" : <CircularProgress size={24} color="inherit" />}
              </button>
            </div>
          </div>
        </form>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openAlert}
          autoHideDuration={5000}
          onClose={() => setOpenAlert(false)}
        >
          <div className="bg-bg-primary px-3 py-1 text-white rounded-md">
            <p className="text-xl">{errorMessage}</p>
          </div>
        </Snackbar>
      </div>
    </>
  );
};

export default Register;
