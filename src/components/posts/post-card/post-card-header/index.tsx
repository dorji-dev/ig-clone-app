"use client";

import { Link } from "@router/customized";
import Image from "next/image";
import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import PostOptionsModal from "../post-options-modal";

interface PostCardHeaderProps {
  userName: string;
  userImage: string;
}

const PostCardHeader = ({ userImage, userName }: PostCardHeaderProps) => {
  const [showPostOptions, setShowPostOptions] = useState(false);

  return (
    <>
      <PostOptionsModal
        open={showPostOptions}
        setOpenModal={setShowPostOptions}
      />
      <div className="flex items-center p-2 md:p-3">
        <div className="flex items-center">
          <Link
            href={`/${userName}`}
            className="w-[40px] h-[40px] relative block"
          >
            <Image
              className="rounded-full h-10 w-10 object-contain p-1 mr-3 border"
              src={userImage ?? "/images/placeholder.png"}
              alt="user-avatar"
              fill
            />
          </Link>
          <Link href={`/${userName}`} className="font-bold ml-[12px]">
            {userName}
          </Link>
        </div>
        <button className="ml-auto" onClick={() => setShowPostOptions(true)}>
          <BiDotsHorizontalRounded className="h-8 w-8" />
        </button>
      </div>
    </>
  );
};

export default PostCardHeader;
