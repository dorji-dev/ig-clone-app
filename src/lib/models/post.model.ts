import { IconType } from "react-icons";

export interface Posts {
  documents: Post[];
}

export interface Post {
  name: string;
  fields: {
    imageFilter: StringValue;
    commentCount: {
      integerValue: string;
    };
    username: StringValue;
    timeStamp: {
      timestampValue: string;
    };
    postImage: StringValue;
    userImage: StringValue;
    userId: StringValue;
    caption: StringValue;
    likes: {
      arrayValue: {
        values: StringValue[];
      };
    };
  };
}

interface StringValue {
  stringValue: string;
}

export type PostActions = {
  title: 'Like' | 'Comment' | 'Share' | 'Bookmark';
  style: string;
  onClick: () => void;
  icon: IconType;
}[];
