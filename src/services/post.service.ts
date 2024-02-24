import { Posts } from "@lib/models";
import { nodeFetch } from "../helpers/node-fetch-helper";

/**
 * Fetch all posts
 * @returns
 */
export const getPosts = async () => {
  return await nodeFetch<Posts>({
    url: `${process.env.FIRESTORE_BASE_API_URL}/documents/posts`,
    method: "GET",
  }).catch(() => {
    return null;
  });
};

export const getCommentsByPostId = async (postId: string) => {
  return await nodeFetch<Posts>({
    url: `${process.env.FIRESTORE_BASE_API_URL}/documents`,
    method: "POST",
    body: {
      structuredQuery: {
        from: {
          collectionId: "comments",
        },
        where: {
          fieldFilter: {
            field: {
              fieldPath: "postId",
            },
            op: "EQUAL",
            value: {
              stringValue: postId,
            },
          },
        },
      },
    },
  }).catch(() => {
    return null;
  });
};
