import { NextFetchTags } from "@lib/models";
import { revalidateTag } from "next/cache";

export const nextRevalidateTag = (tag: NextFetchTags<string>) => {
  revalidateTag(tag);   
};
