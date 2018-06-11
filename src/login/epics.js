import {LOGIN_USER, loginUserFulfilled} from "./actions";
import {put, takeEvery} from 'redux-saga/effects';
import {createUser} from "../api";
import axios from 'axios';

function* loginUserEpic(action) {
  const {userID, accessToken} = action.payload.authResponse;

  const getEmailUrl = `https://graph.facebook.com/v3.0/${userID}?access_token=${accessToken}&fields=email`;
  const {data: {email}} = yield axios.get(getEmailUrl);
  const { data: {token} } = yield createUser(email, userID, accessToken);

  yield put(loginUserFulfilled(token));
}

export function* loginUserSaga() {
  yield takeEvery(LOGIN_USER, loginUserEpic);
}
