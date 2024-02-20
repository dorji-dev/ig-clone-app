import { getCookie } from "@lib/utils";
import { AUTH_COOKIE_NAME } from "../lib/constants";
import { FetchArguments } from "@lib/models";

// Had to make separate fetch for node since the way to access cookie is different between server and client
// In a normal application with custom backend, one fetch will suffice
// Current application makes use of firebase rest api and server actions
/**
 * Wrapper for web `fetch` that handles promise rejection based on response status.
 * Since the application uses firebase rest api, need to pass Authorization header from document cookie access
 * on every request,
 * don't try this in production since your backend would usually handle the resource request access via
 * cookie that is `httpOnly` and `secure`.
 * @param url
 * @param options
 * @returns
 */
export const webFetch = async <ResponseType, BodyType = {}>(
  fetchArgs: FetchArguments<BodyType>
): Promise<ResponseType> => {
  const userTokenId = document && getCookie(AUTH_COOKIE_NAME);
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
    // await before response.json() because it returns a promise, else you won't get the resolved error object in
    // the catch callback
    return Promise.reject(await response.json());
  }
};
