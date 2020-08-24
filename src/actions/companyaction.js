import axios from "axios";
import { COMPANY_ACTION } from "./actiontypes";
import { REGISTER_ACTION } from "./actiontypes";

export const company = ({
  name,
  companyname,
  address,
  address2,
  city,
  zip,
}) => (dispatch) => {
  console.log("You are logged in");
  const config = {
    headers: {
      "Content-Type": "application/json ,",
    },
  };
  const body = {
    name,
    companyname,
    address,
    address2,
    city,
    zip,
  };
  axios
    .post("http://localhost:4000/postcompanies", body, config)
    .then((response) => {
      console.log(response);
      dispatch({
        type: COMPANY_ACTION,
        payload: response.data,
      });
      console.log("response.data");
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: COMPANY_ACTION,
        payload: err,
      });
    });
};

export const register = (name, email, pass) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json ,",
    },
  };
  const body = {
    name,
    email,
    pass,
  };
  axios
    .post("http://localhost:4000/register", body, config)
    .then((response) => {
      console.log(response);
      dispatch({
        type: REGISTER_ACTION,
        payload: response.data,
      });
      console.log("response.data");
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: REGISTER_ACTION,
        payload: err,
      });
    });
};
