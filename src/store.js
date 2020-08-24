import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"; // this is for debugging with React-Native-Debugger, you may leave it out
import allreducers from "./reducers/index";

const store = createStore(
  allreducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
