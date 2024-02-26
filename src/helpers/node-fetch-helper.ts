import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "../lib/constants";
import { FetchArguments } from "@lib/models";

// Had to make separate fetch for node since the way to access cookie is different between server and client
// In a normal application with custom backend, one fetch will suffice
// Current application makes use of firebase rest api and server actions

/**
 * Wrapper for node `fetch` that handles promise rejection based on response status.
 * Since the application uses firebase rest api, need to pass userTokenId from request cookie
 * as a bearer in the Authorization header.
 * @param fetchArgs
 * @returns
 */
export const nodeFetch = async <ResponseType, BodyType = {}>(
  fetchArgs: FetchArguments<BodyType>
): Promise<ResponseType> => {
  const userTokenId = cookies().get(AUTH_COOKIE_NAME)?.value;
  const requestHeaders: { [index: string]: string } = {
    ...fetchArgs.headers,
  };
  if (userTokenId) {
    requestHeaders["Authorization"] = `Bearer ${userTokenId}`;
  }
  const response = await fetch(fetchArgs.url, {
    method: fetchArgs.method,
    body: JSON.stringify(fetchArgs.body),
    headers: requestHeaders,
    next: fetchArgs.nextOptions,
  });

  if (response.status === 200) {
    return response.json();
  } else {
    let errorObject;
    try {
      // if errored response is JSON parsable, return the object as it is
      errorObject = await response.json();
    } catch (_) {
      // else return null
      errorObject = null;
    }
    return Promise.reject(errorObject);
  }
};
