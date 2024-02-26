import { PostsResponse } from "@lib/models";
import { nodeFetch } from "../helpers/node-fetch-helper";

/**
 * Fetch all posts
 * @returns
 */
export const getPosts = async () => {
  return await nodeFetch<PostsResponse>({
    url: `${process.env.NEXT_PUBLIC_FIRESTORE_BASE_API_URL}/documents/posts`,
    method: "GET",
  }).catch(() => {
    return null;
  });
};

