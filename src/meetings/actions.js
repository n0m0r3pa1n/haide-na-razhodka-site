export const FETCH_MEETINGS = "fetch.meetings";
export const FETCH_MEETINGS_FAILED = "fetch.meetings.failed";
export const FETCH_MEETINGS_FULFILLED = "fetch.meetings.fulfilled";

export const fetchMeetings = () => ({type: FETCH_MEETINGS});
export function fetchMeetingsFulfilled(payload) {
  return {
    type: FETCH_MEETINGS_FULFILLED,
    pagination: payload
  };
}

export function fetchMeetingsFailed(message) {
  return {
    type: FETCH_MEETINGS_FULFILLED,
    message
  };
}
