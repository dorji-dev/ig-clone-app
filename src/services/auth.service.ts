import { AUTH_BASE_API_URL } from "@lib/constants";
import { fetchHelper } from "../helpers/request-helper";
import { LoggedInUserResponse } from "@lib/models";

/**
 * Get logged in user by 
 * @param idToken 
 * @returns 
 */
export const getLoggedInUser = async (idToken: string) => {
  return await fetchHelper<LoggedInUserResponse>(
    `${AUTH_BASE_API_URL}/accounts:lookup?key=${process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY}`,
    "POST",
    {
      idToken,
    },
  );
};
