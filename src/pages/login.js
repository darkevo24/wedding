import { CircularProgress, Snackbar } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchApiGetUser, fetchApiLogin } from "../helper/fetchApi/user";
import { tokenEncrypt } from "../helper/tokenHash";
import { useDispatch } from "react-redux";
import { insertToken, insertUserData } from "../redux/reducers/authToken";
import { useSelector } from "react-redux";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(useSelector((state) => state.authToken.openAlert));
  const [errorMessage, setErrorMessage] = useState(useSelector((state) => state.authToken.errorMessage));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUser = () => {
    fetchApiGetUser((res) => {
      setLoading(false);
      if (res.hasOwnProperty("resVal")) {
        dispatch(insertUserData(res.resVal.data));
        localStorage.setItem("userData", res.resVal.data);
        route.push("/user/vendor-management");
      } else {
        setErrorMessage(res);
        setOpenAlert(true);
      }
    });
  };

  const doLogin = () => {
    let params = {
      email: email,
      password: password,
    };

    setLoading(true);
    fetchApiLogin(params, (res) => {
      if (res.hasOwnProperty("resVal")) {
        let token = tokenEncrypt(res.resVal.token);
        dispatch(insertToken(token));
        localStorage.setItem("token", token);
        getUser();
      } else {
        setLoading(false);
        setErrorMessage(res);
        setOpenAlert(true);
      }
    });
  };

  return (
    <>
      <Head>
        <title>WeddingPlatform - Login</title>
      </Head>
      <div className="w-full h-96 bg-bg-wedding-content bg-cover object-cover bg-center">
        <div data-aos="fade-right" className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-8 flex flex-col items-center space-y-3 text-white">
            <p className="text-4xl font-cagily">Login Page</p>
          </div>
        </div>
      </div>
      <div className="py-10 px-5 bg-bg-serenade text-bg-primary">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-cagily">Welcome Back!</p>
          <p className="text-xl font-cagily">Get your best wedding service!</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            doLogin();
          }}
        >
          <div className="mt-10 w-full flex flex-col items-center">
            <div className="mt-5 w-full md:w-1/3 flex flex-col items-center">
              <div
                className="w-full flex justify-center items-center hover:opacity-70 py-2.5 rounded-md cursor-pointer"
                style={{ backgroundColor: "#3B5998" }}
              >
                <FaFacebookF size={20} className="text-white mr-2" />
                <p className="text-white">Login with Facebook</p>
              </div>
              <div
                className="mt-3 w-full flex justify-center items-center hover:opacity-70 py-2.5 rounded-md cursor-pointer"
                style={{ backgroundColor: "#dd4b39" }}
              >
                <BsGoogle size={20} className="text-white mr-2" />
                <p className="text-white">Login with Google</p>
              </div>
              <div className="border-t border-t-bg-primary opacity-30 my-8 w-full"></div>
              <div className="w-full">
                <p className="font-semibold">EMAIL ADDRESS *</p>
                <input
                  onChange={function (e) {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  type="email"
                  className="w-full outline-none py-2 px-2"
                  required
                />
              </div>
              <div className="w-full mt-5">
                <p className="font-semibold">PASSWORD *</p>
                <input
                  onChange={function (e) {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  type="password"
                  className="w-full outline-none py-2 px-2"
                  required
                />
              </div>
              <button type="submit" className="bg-bg-primary hover:bg-bg-primary-darker w-full py-2 mt-8 rounded-md text-white">
                {!loading ? "Login" : <CircularProgress size={24} color="inherit" />}
              </button>
              <p className="mt-3">
                {"Don't have an account?"}{" "}
                <span onClick={() => route.push("/register")} className="cursor-pointer hover:underline">
                  Register here
                </span>
              </p>
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

export default Login;
