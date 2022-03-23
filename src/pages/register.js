import { CircularProgress, Snackbar } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import PlatformChecklist from "../components/layouts/pages/register/platformChecklist";
import { fetchApiRegister } from "../helper/fetchApi/user";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setOpenAlert, setErrorMessage } from "../redux/reducers/authToken";

const Register = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [openAlertLocal, setOpenAlertLocal] = useState(false);
  const [errorMessageLocal, setErrorMessageLocal] = useState("");
  const [weddingParams, setWeddingParams] = useState({
    bride_first_name: "",
    bride_last_name: "",
    groom_first_name: "",
    groom_last_name: "",
    wedding_date: "",
    email: "",
    password: "",
  });

  const doRegister = () => {
    if (weddingParams.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      setOpenAlertLocal(true);
      return;
    }

    setLoading(true);
    fetchApiRegister(weddingParams, (res) => {
      if (res.hasOwnProperty("resVal")) {
        dispatch(setErrorMessage("Registration successful! Please login."));
        dispatch(setOpenAlert(true));
        route.push("/login");
      } else {
        setErrorMessageLocal(res);
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
      <div className="py-10 px-5 bg-bg-serenade text-bg-charcoal">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-cagily">So you said Yes - Congrats!</p>
          <p className="text-xl font-cagily">We cant wait to help you get started!</p>
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
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                        placeholder="First Name"
                        required
                      />
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, bride_last_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
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
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                        placeholder="First Name"
                        required
                      />
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, groom_last_name: e.target.value })}
                        type="text"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
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
                    <input
                      onChange={(e) => setWeddingParams({ ...weddingParams, email: e.target.value })}
                      value={weddingParams.email}
                      type="email"
                      className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                      required
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div>
                    <p className="font-semibold">WEDDING DATE *</p>
                    <input
                      onChange={(e) => setWeddingParams({ ...weddingParams, wedding_date: e.target.value })}
                      type="date"
                      className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                    />
                    <p className="italic mt-2">You can always change this later if you need to.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="font-semibold mb-3">HOW DID YOU HEAR ABOUT US?</p>
                <PlatformChecklist />
              </div>
              <div className="mt-5">
                <p className="text-xl">Almost There!</p>
                <div className="md:flex">
                  <p className="font-medium">Create an account, so we can save your preferences.&nbsp;</p>
                  <p className="font-normal italic">
                    Already have an account? <span className="cursor-pointer text-bg-primary hover:underline">Login.</span>
                  </p>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="md:flex md:w-2/3 items-center">
                    <div className="md:w-1/4">
                      <p className="font-medium">Email Address</p>
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
                      <p className="font-medium">Password</p>
                      <p className="italic">(8 or more characters)</p>
                    </div>
                    <div className="md:w-3/4">
                      <input
                        onChange={(e) => setWeddingParams({ ...weddingParams, password: e.target.value })}
                        type="password"
                        className="w-full outline-none py-2 px-2 rounded-sm mt-3"
                        required
                      />
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
