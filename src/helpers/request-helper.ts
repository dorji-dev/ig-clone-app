import { FETCH_METHODS } from "../lib/constants";

/**
 * Wrapper for node `fetch` that handles promise rejection based on response status.
 * @param url
 * @param options
 * @returns
 */
export const fetchHelper = async <R, T = {}>(
  url: string,
  method: FETCH_METHODS,
  body: T,
  headers = {},
  nextOptions?: NextFetchRequestConfig | undefined
): Promise<R> => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers,
    next: nextOptions
  });
  if (response.status === 200) {
    return response.json();
  } else {
    // await before response.json() because it returns a promise, else you won't get the resolved error object in
    // the catch callback
    return Promise.reject(await response.json());
  }
};
