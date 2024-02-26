import { IconType } from "react-icons";

export interface FirebaseIntegerValue {
  integerValue: string;
}
export interface FirebaseTimeStampValue {
  timestampValue: string;
}

export interface FirebaseStringValue {
  stringValue: string;
}

export interface FirebaseArrayValue {
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
