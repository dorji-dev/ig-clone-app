import { PostCommentsResponse } from "@lib/models";
import { nodeFetch } from "../helpers/node-fetch-helper";

export const getCommentsByPostId = async (postId: string) => {
  return await nodeFetch<PostCommentsResponse>({
    url: `${process.env.NEXT_PUBLIC_FIRESTORE_BASE_API_URL}/documents:runQuery`,
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
    nextOptions: {
      tags: [`Comment${postId}`],
    },
  }).catch(() => {
    return null;
  });
};
