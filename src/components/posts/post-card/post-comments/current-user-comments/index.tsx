import { PostCommentsResponse } from "@lib/models";

interface CurrentUserCommentProps {
  postComments: PostCommentsResponse;
}

const CurrentUserComment = ({ postComments }: CurrentUserCommentProps) => {
  const postComment = [
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

  return (
    <div>
      {postComment.length > 0 &&
        postComment.map((comment) => (
          <p className="mb-2" key={comment.id}>
            <span className="font-bold mr-2">{comment.userName}</span>
            <span>{comment.text}</span>
          </p>
        ))}
    </div>
  );
};

export default CurrentUserComment;
