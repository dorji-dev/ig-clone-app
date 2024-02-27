"use client";

import { Skeleton } from "antd";

const PostListSkeleton = () => {
  return Array.from({ length: 2 }).map((_, index) => (
    <div
      key={index}
      className="bg-white space-y-4 md:rounded-lg md:shadow-main_shadow relative mb-6 p-5"
    >
      <div className="flex">
        <Skeleton.Avatar className="mr-4" />
        <Skeleton.Input />
      </div>
      <Skeleton.Image className="!w-full !h-[400px]" />
      <div className="flex space-x-2">
        <Skeleton.Button shape="circle" />
        <Skeleton.Button shape="circle" />
        <Skeleton.Button shape="circle" />
      </div>
      <Skeleton />
    </div>
  ));
};

export default PostListSkeleton;
