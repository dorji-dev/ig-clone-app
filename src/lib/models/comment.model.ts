import {
  FirebaseStringValue,
  FirebaseArrayValue,
  FirebaseTimeStampValue,
} from "./post.model";

export type PostCommentsResponse = {
  document: {
    name: string;
    fields: {
      userImage: FirebaseStringValue;
      parentColRef: FirebaseStringValue;
      text: FirebaseStringValue;
      postId: FirebaseStringValue;
      userId: FirebaseStringValue;
      likes: FirebaseArrayValue;
      username: FirebaseStringValue;
      timeStamp: FirebaseTimeStampValue;
    };
  };
}[];

export type AddCommentPayload = {
  text: FirebaseStringValue;
  likes: FirebaseArrayValue;
  userId: FirebaseStringValue;
  postId: FirebaseStringValue;
  username: FirebaseStringValue;
  userImage: FirebaseStringValue;
  timeStamp: FirebaseTimeStampValue;
};
