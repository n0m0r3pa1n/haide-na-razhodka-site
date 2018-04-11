import {FETCH_MEETINGS, fetchMeetingsFulfilled, fetchMeetingsFailed, searchFormdataIsSet} from "./actions";
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchMeetingsEpic(action) {
  const {fromDate, toDate} = action.payload;
  yield put(searchFormdataIsSet(fromDate, toDate));
  try {
    const response= yield axios.get(`http://haide-na-razhodka-server.herokuapp.com/api/meetings?page=1&pageSize=10&fromDate=${fromDate}&toDate=${toDate}`);
    yield put(fetchMeetingsFulfilled(response.data));
  } catch (e) {
    yield put(fetchMeetingsFailed(e.message));
  }
}

export function* fetchMeetingsSaga() {
  yield takeEvery(FETCH_MEETINGS, fetchMeetingsEpic);
}

export default fetchMeetingsSaga;

