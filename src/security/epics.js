import {
  VALIDATE_TOKEN,
  validateTokenSuccess,
  validateTokenFailed
} from "./actions";
import {validateToken} from "../api";
import {put, takeEvery} from 'redux-saga/effects';


function* validateTokenEpic(action) {
  const {token} = action.payload;
  try {
    yield validateToken(token);
    yield put(validateTokenSuccess(token));
  } catch (e) {
    yield put(validateTokenFailed());
  }

}

export function* validateTokenSaga() {
  yield takeEvery(VALIDATE_TOKEN, validateTokenEpic);
}

