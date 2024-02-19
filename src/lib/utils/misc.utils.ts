export const isTouchDevice = (): boolean => {
  return window.matchMedia("(pointer: coarse)").matches;
};
