import { COMPANY_ACTION } from "../actions/actiontypes";

export const initialState = {
  name: "",
  companyname: "",
  address: "",
  address2: "",
  phone: "",
  zip: "",
};

export function company(state = initialState, action) {
  switch (action.type) {
    case COMPANY_ACTION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
