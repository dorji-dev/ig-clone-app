"use client";

import { PostCommentsResponse } from "@lib/models";
import { useGetCurrentUserQuery } from "@state";

interface CurrentUserCommentProps {
  postComments: PostCommentsResponse;
}

const CurrentUserComment = ({ postComments }: CurrentUserCommentProps) => {
  const { data: currentUser, isLoading } = useGetCurrentUserQuery();

  if (isLoading) {
    return null;
  }

  const currentUserComments = postComments.filter(
    (postComment) =>
      postComment.document?.fields?.userId?.stringValue ===
      currentUser?.users?.[0].localId
  );

  return (
    currentUserComments.length > 0 &&
    currentUserComments.map((comment) => (
      <p className="mb-2" key={comment.document.name}>
        <span className="font-bold mr-2">
          {comment.document.fields.username.stringValue}
        </span>
        <span>{comment.document.fields.text.stringValue}</span>
      </p>
    ))
  );
};

export default CurrentUserComment;
