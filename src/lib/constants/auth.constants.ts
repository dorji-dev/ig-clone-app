export const AUTH_COOKIE_NAME = "firebase_cookie";
export const AUTH_BASE_API_URL = "https://identitytoolkit.googleapis.com/v1";
export const AUTH_ERROR_MAPPINGS = {
  EMAIL_EXISTS: {
    title: "Email already exists",
    description:
      "The email is taken. You need to use a different email for registration",
  },
  INVALID_PASSWORD: {
    title: "Password is invalid",
    description: "The password is incorrect for the given email address",
  },
  EMAIL_NOT_FOUND: {
    title: "Email not found",
    description: "Looks like the email is not registered yet.",
  },
};
