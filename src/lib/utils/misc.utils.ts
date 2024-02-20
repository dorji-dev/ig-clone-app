export const isTouchDevice = (): boolean => {
  return window.matchMedia("(pointer: coarse)").matches;
};

/**
 * Store firebase id token in local storage. Don't do this in production.
 * @param token
 */
export const setIdToken = (token: string) => {
  window.localStorage.setItem("id_token", token);
};
/**
 * Get firebase id token from local storage. Don't do this in production.
 * @param token
 */
export const getIdToken = (token: string) => {
  window.localStorage.getItem("id_token");
};

/**
 * Get javascript accessible cookie value by name
 * @param name 
 * @returns 
 */
export const getCookie = (name: string) => {
  let cookie: { [index: string]: string } = {};
  document.cookie.split(";").forEach(function (el) {
    let split = el.split("=");
    cookie[split[0].trim()] = split.slice(1).join("=");
  });
  return cookie[name];
};

