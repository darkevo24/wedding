import { tokenDecrypt } from "../tokenHash";

export const fetchApiRegister = (params, res) => {
  fetch(process.env.API_URL + "customer/auth/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.hasOwnProperty("success") && responseJson.success == true) {
        res({ resVal: responseJson });
      } else {
        res(JSON.stringify(responseJson.message));
      }
    });
};

export const fetchApiLogin = (params, res) => {
  fetch(process.env.API_URL + "customer/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.hasOwnProperty("success") && responseJson.success == true) {
        res({ resVal: responseJson });
      } else {
        res(JSON.stringify(responseJson.message));
      }
    });
};

export const fetchApiGetUser = (res) => {
  let token = localStorage.getItem("token");
  token = tokenDecrypt(token);

  fetch(process.env.API_URL + "customer/auth/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.hasOwnProperty("success") && responseJson.success == true) {
        res({ resVal: responseJson });
      } else {
        res(JSON.stringify(responseJson.message));
      }
    });
};
