import { REGISTER_ACTION } from "../actions/actiontypes";

export const initialState = {
  name: "",
  email: "",
  password: "",
};

export function register(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ACTION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
