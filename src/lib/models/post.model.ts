import { IconType } from "react-icons";

interface FirebaseIntegerValue {
  integerValue: string;
}
interface FirebaseTimeStampValue {
  timestampValue: string;
}

interface FirebaseStringValue {
  stringValue: string;
}

interface FirebaseArrayValue {
  arrayValue: {
    values: FirebaseStringValue[];
  };
}

export interface PostsResponse {
  documents: Post[];
}

export interface Post {
  name: string;
  fields: {
    imageFilter: FirebaseStringValue;
    commentCount: FirebaseIntegerValue;
    username: FirebaseStringValue;
    timeStamp: FirebaseTimeStampValue;
    postImage: FirebaseStringValue;
    userImage: FirebaseStringValue;
    userId: FirebaseStringValue;
    caption: FirebaseStringValue;
    likes: FirebaseArrayValue;
  };
}

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

export type PostActions = {
  title: "Like" | "Comment" | "Share" | "Bookmark";
  style: string;
  onClick: () => void;
  icon: IconType;
}[];
