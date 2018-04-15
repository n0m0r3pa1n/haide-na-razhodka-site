export const FETCH_MEETING = "fetch.meeting";
export const FETCH_MEETING_FULFILLED = "fetch.meeting.fulfilled";

export const fetchMeeting = (id) => {
  return {
    type: FETCH_MEETING,
    payload: { id }
  };
};

export function fetchMeetingFulfilled(meeting) {
  return {
    type: FETCH_MEETING_FULFILLED,
    payload: { meeting }
  };
}
