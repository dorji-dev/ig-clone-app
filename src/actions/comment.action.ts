"use server";

import { AddCommentPayload, GenericServerActionResponse } from "@lib/models";
import { nodeFetch } from "../helpers/node-fetch-helper";
import { nextRevalidateTag } from "@next-revalidate";

/**
 * Action to add post comment
 * @param payload 
 * @returns 
 */
export const addComment = async (
  payload: AddCommentPayload
): Promise<GenericServerActionResponse> => {
  const url = `${process.env.NEXT_PUBLIC_FIRESTORE_BASE_API_URL}/documents/comments`;
  try {
    await nodeFetch({
      url,
      method: "POST",
      body: {
        fields: payload,
      },
    });
    nextRevalidateTag("Comment");
    return {
      status: "success",
    };
  } catch (error) {
    return {
      status: "error",
      errorMessage: error,
    };
  }
};
