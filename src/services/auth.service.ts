import { AUTH_BASE_API_URL } from "@lib/constants";
import { LoggedInUserResponse } from "@lib/models";
import { nodeFetch } from "../helpers/node-fetch-helper";

/**
 * Get logged in user by idToken
 * @param idToken
 * @returns
 */
export const getLoggedInUser = async (idToken: string) => {
  return await nodeFetch<LoggedInUserResponse>({
    url: `${AUTH_BASE_API_URL}/accounts:lookup?key=${process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY}`,
    method: "POST",
    body: {
      idToken,
    },
  });
};
