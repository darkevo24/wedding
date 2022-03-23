import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { fetchApiVerifyUser } from "../../helper/fetchApi/user";
import { useDispatch } from "react-redux";
import { setOpenAlert, setErrorMessage } from "../../redux/reducers/authToken";

const Token = () => {
  const dispatch = useDispatch();
  const route = useRouter();

  const doVerify = (token) => {
    fetchApiVerifyUser(token, (res) => {
      if (res.hasOwnProperty("resVal")) {
        dispatch(setErrorMessage("Registration successful! Please login."));
      } else {
        dispatch(setErrorMessage(res));
      }
      dispatch(setOpenAlert(true));
      route.replace("/login");
    });
  };

  useEffect(() => {
    if (route.isReady) {
      if (route.query) {
        doVerify(route.query.token);
      }
    }
  }, [route.query]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-2xl">Verifying your account, please wait...</p>
      </div>
    </>
  );
};

export default Token;
