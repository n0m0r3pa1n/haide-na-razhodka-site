import {FETCH_MEETING, fetchMeetingFulfilled} from "./actions";
import {put, takeEvery} from 'redux-saga/effects';
import {getMeeting} from "../api";

function* fetchMeetingEpic(action) {
  const {id} = action.payload;
  const response = yield getMeeting(id);
  console.log(response);
  yield put(fetchMeetingFulfilled(response.data.meeting));
}

export function* fetchMeetingSaga() {
  yield takeEvery(FETCH_MEETING, fetchMeetingEpic);
}

export default fetchMeetingSaga;

