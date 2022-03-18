import { CircularProgress, Snackbar } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  function login(){
    axios.post("http://18.118.36.137:4000/api/v1/customer/auth/login",{
      email : email,
      password : password
    }).then(function(res){
      console.log(res);
    }).catch(function(err){
      console.log(err);
    })
  }
  return (
    <>
      <Head>
        <title>WeddingPlatform - Login</title>
      </Head>
      <div className="w-full h-96 bg-bg-wedding-content bg-cover object-cover bg-center">
        <div data-aos="fade-right" className="w-full h-full flex flex-col justify-center items-center">
          <div className="mb-8 flex flex-col items-center space-y-3 text-white">
            <p className="text-4xl">Login Page</p>
          </div>
        </div>
      </div>
      <div className="py-10 px-5 bg-bg-serenade text-bg-primary">
        <div className="flex flex-col items-center">
          <p className="text-2xl">Welcome Back!</p>
          <p className="text-xl">Get your best wedding service!</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mt-5 w-full flex flex-col items-center">
            <div className="mt-5 w-full md:w-1/4 flex flex-col items-center">
              <div className="w-full">
                <p className="font-semibold">EMAIL ADDRESS *</p>
                <input onChange={function(e){
                  setEmail(e.target.value);
                }} id='email' type="email" className="w-full outline-none py-2 px-2" required />
              </div>
              <div className="w-full mt-5">
                <p className="font-semibold">PASSWORD *</p>
                <input onChange={function(e){
                  setPassword(e.target.value);
                }} id='password' type="password" className="w-full outline-none py-2 px-2" required />
              </div>
              <p className="mt-3">
                Login as Vendor?{" "}
                <span onClick={() => route.push("/vendor/login")} className="cursor-pointer hover:underline">
                  Click here
                </span>
              </p>
              <button onClick={login} type="submit" className="bg-bg-primary hover:bg-bg-primary-darker w-full py-2 mt-8 rounded-md text-white">
                {!loading ? "Login" : <CircularProgress size={24} color="inherit" />}
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

export default Login;
