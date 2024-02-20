import { Posts } from "@lib/models";
import { nodeFetch } from "../helpers/node-fetch-helper";

export const getPosts = async () => {
  return await nodeFetch<Posts>({
    url: `${process.env.FIRESTORE_BASE_API_URL}/documents/posts`,
    method: "GET",
  }).catch(() => {
    return null;
  });
};
