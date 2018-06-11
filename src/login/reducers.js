import {
  LOGIN_USER_FULFILLED
} from "./actions";

import {VALIDATE_TOKEN_SUCCESS, RESET_TOKEN, VALIDATE_TOKEN_FAILURE} from "../security/actions";

const initialState = {
  isAuthenticated: false,
  token: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token
      };

    case VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token
      };
    case RESET_TOKEN:
    case VALIDATE_TOKEN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        token: ""
      };
  }

  return state;
};
