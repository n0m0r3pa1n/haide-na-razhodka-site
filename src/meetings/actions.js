export const FETCH_MEETINGS = "fetch.meetings";
export const FETCH_MEETINGS_FULFILLED = "fetch.meetings.fulfilled";

export const fetchMeetings = () => ({ type: FETCH_MEETINGS });
export const fetchMeetingsFulfilled = payload => ({ type: FETCH_MEETINGS_FULFILLED, payload });
