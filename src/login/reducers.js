import {
  LOGIN_USER_FULFILLED
} from "./actions";

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
        token: action.payload
      };
  }

  return state;
};
