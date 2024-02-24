"use client";

import moment from "moment";
import Moment from "react-moment";

interface PostCardTimeStampProps {
  postTimeStamp: string;
}

const PostCardTimeStamp = ({ postTimeStamp }: PostCardTimeStampProps) => {
  return (
    <div className="px-5 pb-4 pt-2 wordSpace block uppercase text-[10px] font-[500] text-gray-400">
      <Moment fromNow>{moment(postTimeStamp)?.toDate()}</Moment>
    </div>
  );
};

export default PostCardTimeStamp;
