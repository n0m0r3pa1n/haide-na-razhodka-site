import {FETCH_MEETINGS_FULFILLED} from "./actions";

export const meetingsReducer = (state = { meetings: [] }, action) => {
  switch (action.type) {
    case FETCH_MEETINGS_FULFILLED:
      return {
        ...state,
        meetings: action.payload
      };
  }

  return state;
};
