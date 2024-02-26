import { NextFetchTags } from "@lib/constants";
import { revalidateTag } from "next/cache";

export const nextRevalidateTag = (tag: NextFetchTags) => {
  revalidateTag(tag);
};
