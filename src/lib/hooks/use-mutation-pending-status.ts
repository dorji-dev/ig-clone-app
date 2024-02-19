import { useState } from "react";

/**
 * A hook to get the pending status of mutations like POST request. The pending status will
 * become false on both promise resolve and reject.
 * @param mutationCallback Your mutation callback
 * @returns `isPending` Pending or loading status of the mutation
 * @returns `mutate:` Use this callback to actually do the mutation which will have the same signature as your original mutation function
 */
export const useMutationPendingStatus = <T extends any[], R extends any>(
  mutationCallback: (...arg: T) => Promise<R>
) => {
  const [isPending, setIsPending] = useState(false);

  /**
   * Use this callback to actually do the mutation which will have the same signature as your original mutation function
   * @param arg
   * @returns
   */
  const mutate = async (...arg: T): Promise<R> => {
    setIsPending(true);
    const res = await mutationCallback(...arg).finally(() =>
      setIsPending(false)
    );
    return res;
  };

  return { isPending, mutate };
};
