import {FETCH_MEETING_FULFILLED} from "./actions";

const initialState = {
  meeting: {}
};

export const meetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEETING_FULFILLED:
      return {
        ...state,
        details: action.payload.meeting
      };
  }

  return state;
};
