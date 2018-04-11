export const FETCH_MEETINGS = "fetch.meetings";
export const SEARCH_MEETINGS_DATA_IS_SET = "search.meetings.data.set";
export const FETCH_MEETINGS_FAILED = "fetch.meetings.failed";
export const FETCH_MEETINGS_FULFILLED = "fetch.meetings.fulfilled";

export const fetchMeetings = (fromDate, toDate) => ({type: FETCH_MEETINGS,
  payload: {
    fromDate,
    toDate
  }
});

export function fetchMeetingsFulfilled(payload) {
  return {
    type: FETCH_MEETINGS_FULFILLED,
    pagination: payload
  };
}

export function searchFormdataIsSet(fromDate, toDate) {
  return {
    type: SEARCH_MEETINGS_DATA_IS_SET,
    payload: {
      fromDate,
      toDate
    }
  };
}


export function fetchMeetingsFailed(message) {
  return {
    type: FETCH_MEETINGS_FULFILLED,
    message
  };
}
