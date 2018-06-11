export const VALIDATE_TOKEN = "validate.token";
export const RESET_TOKEN = "reset.token";
export const VALIDATE_TOKEN_SUCCESS = "validate.token.success";
export const VALIDATE_TOKEN_FAILURE = "validate.token.failure";

export const validateToken = (token) => {
  return {
    type: VALIDATE_TOKEN,
    payload: { token }
  };
};

export const resetToken = () => {
  return {
    type: RESET_TOKEN
  };
};

export function validateTokenSuccess(token) {
  return {
    type: VALIDATE_TOKEN_SUCCESS,
    payload: {token}
  };
}

export function validateTokenFailed() {
  return {
    type: VALIDATE_TOKEN_FAILURE
  };
}
