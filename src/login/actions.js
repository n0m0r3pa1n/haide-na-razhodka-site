export const LOGIN_USER = "login.user";
export const LOGIN_USER_FULFILLED = "login.user.fulfilled";

export function login(payload) {
  return {type: LOGIN_USER, payload};
}

export function loginMeetingFulfilled(payload) {
  return {type: LOGIN_USER_FULFILLED, payload};
}
