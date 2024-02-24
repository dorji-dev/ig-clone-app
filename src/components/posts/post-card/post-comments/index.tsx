import { getCommentsByPostId } from "@lib/services/post.service";

interface PostCommentsProps {
  postId: string;
}

const PostComments = async ({ postId }: PostCommentsProps) => {
  const commentsResponse = await getCommentsByPostId(postId);

  const postComments = [
    {
      id: "234563456",
      userName: "dorji@",
      text: "hello buddy",
    },
    {
      id: "34563wer456",
      userName: "dorji@",
      text: "hello buddy",
    },
  ];

  if (!commentsResponse) {
    return <>No comment for this post</>;
  }

  return (
    <div>
      {commentsResponse.length > 0 && (
        <button className="text-gray-500 mb-2">
          {`View ${commentsResponse.length} ${
            commentsResponse.length === 1 ? "comment" : "comments"
          }`}
        </button>
      )}
      {/* current user comments */}
      <div>
        {postComments.length > 0 &&
          postComments.map((comment) => (
            <p className="mb-2" key={comment.id}>
              <span className="font-bold mr-2">{comment.userName}</span>
              <span>{comment.text}</span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default PostComments;
