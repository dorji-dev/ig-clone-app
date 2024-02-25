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

export type PostActionTitle = "Like" | "Comment" | "Share" | "Bookmark";

export type PostActions = {
  title: PostActionTitle;
  style: string;
  icon: IconType;
}[];

export type PostActionWithHandler = PostActions[number] & {
  onClick: () => void;
};

export type PostActionHandlers = {
  [K in PostActionTitle]: () => void;
};
