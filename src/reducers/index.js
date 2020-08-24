import { combineReducers } from "redux";
import { company } from "./companyreducer";
import { register } from "./Registerreducer";

const allreducers = combineReducers({
  company,
  register,
});

export default allreducers;
