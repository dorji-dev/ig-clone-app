import { useEffect, useState } from "react";

/**
 * A hook to dynamically query device size based on the max width query: `(min-width: ${tailwindMediaWidth}px)`
 * @param tailwindMediaWidth
 * @returns
 */
export function useMaxWidthMediaQuery(breakpoint: string) {
  const [mediaMatches, setMediaMatches] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    setIsChecking(true);
    const mediaWatcher = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setMediaMatches(mediaWatcher.matches);
    setIsChecking(false);

    function updateMediaMatch(e: MediaQueryListEvent) {
      setMediaMatches(e.matches);
    }

    mediaWatcher.addEventListener("change", updateMediaMatch);

    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateMediaMatch);
    };
  }, [breakpoint]);

  return {
    mediaMatches,
    isChecking,
  };
}
