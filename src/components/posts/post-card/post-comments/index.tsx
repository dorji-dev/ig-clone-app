import { getCommentsByPostId } from "@lib/services/post.service";
import CurrentUserComment from "./current-user-comments";

interface PostCommentsProps {
  postId: string;
}

const PostComments = async ({ postId }: PostCommentsProps) => {
  const comments = await getCommentsByPostId(postId);

  if (!comments) {
    return <>No comment for this post</>;
  }

  return (
    <div>
      {comments.length > 0 && (
        <button className="text-gray-500 mb-2">
          {`View ${comments.length} ${
            comments.length === 1 ? "comment" : "comments"
          }`}
        </button>
      )}

      <CurrentUserComment postComments={comments} />
    </div>
  );
};

export default PostComments;
