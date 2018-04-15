import {FETCH_MEETINGS, fetchMeetingsFulfilled, fetchMeetingsFailed, searchFormdataIsSet} from "./actions";
import {getMeetings} from "../api";
import { put, takeEvery } from 'redux-saga/effects';


function* fetchMeetingsEpic(action) {
  const {fromDate, toDate, page} = action.payload;
  yield put(searchFormdataIsSet(fromDate, toDate));
  try {
    const response= yield getMeetings(page, 10, fromDate, toDate);
    yield put(fetchMeetingsFulfilled(response.data));
  } catch (e) {
    yield put(fetchMeetingsFailed(e.message));
  }
}

export function* fetchMeetingsSaga() {
  yield takeEvery(FETCH_MEETINGS, fetchMeetingsEpic);
}

export default fetchMeetingsSaga;

