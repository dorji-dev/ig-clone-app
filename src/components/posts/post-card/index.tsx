"use client";

import EmojiPicker from "@component/emoji-picker";
import { Post } from "@lib/models";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { imagePlaceholder } from "@lib/utils";
import clsx from "clsx";
import Moment from "react-moment";
import moment from "moment";
import { BsEmojiSmile } from "react-icons/bs";
import { POST_ACTIONS_DATA } from "../../../lib/constants/post.constants";
import { Button, Tooltip } from "antd";
import { useTailwindMediaQuery } from "@lib/hooks";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [comment, setComment] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { mediaMatches: isAbove768 } = useTailwindMediaQuery("768");

  const postLikes = post.fields?.likes?.arrayValue?.values;
  const postUserName = post.fields?.username?.stringValue;
  const postCaption = post.fields?.caption?.stringValue;
  const postCommentCount = Number(post.fields?.commentCount?.integerValue);
  const postTimeStamp = post.fields?.timeStamp?.timestampValue;
  const postComments = [
    {
      id: "234563456",
      userName: "dorji@",
      text: "hello buddy",
    },
    {
      id: "34563456",
      userName: "dorji@",
      text: "hello buddy",
    },
  ];

  return (
    <div className="bg-white md:rounded-lg md:shadow-main_shadow relative">
      {/* show emoji picker */}
      {showPicker && (
        <EmojiPicker
          onClose={() => setShowPicker(false)}
          onSelect={(emoji) =>
            setComment((prevComment) => prevComment + emoji.native)
          }
        />
      )}
      {/* Header */}
      <div className="flex items-center p-2 md:p-3">
        <div className="flex items-center">
          <Link
            href={`/${post.fields?.username?.stringValue}`}
            className="w-[40px] h-[40px] relative block"
          >
            <Image
              className="rounded-full h-10 w-10 object-contain p-1 mr-3 border"
              src={
                post.fields?.userImage?.stringValue ?? "/images/placeholder.png"
              }
              alt="user-avatar"
              fill
            />
          </Link>
          <Link
            href={`/${post.fields?.username?.stringValue}`}
            className="font-bold ml-[12px]"
          >
            {post.fields?.username?.stringValue}
          </Link>
        </div>
        <button className="ml-auto">
          <BiDotsHorizontalRounded className="h-8 w-8" />
        </button>
      </div>
      {/* Post image */}
      <figure
        className={clsx(
          post.fields?.imageFilter?.stringValue,
          "max-h-[500px] overflow-hidden"
        )}
      >
        <Image
          className="object-cover"
          width={800}
          height={800}
          placeholder="blur"
          blurDataURL={imagePlaceholder}
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 767px) 100vw,
                        (min-width: 768px) 70vw"
          src={post.fields?.postImage?.stringValue ?? imagePlaceholder} // avoid errors on post upload: see ImageUpload component
          alt="post image"
        />
      </figure>
      {/* bottom section */}
      <section className="pt-5">
        {/* Buttons */}
        <div className="flex mb-4 justify-between px-5">
          {POST_ACTIONS_DATA.map((actionData) => (
            <Tooltip
              key={actionData.title}
              placement="bottom"
              title={isAbove768 ? actionData.title : ""}
            >
              <Button
                shape="circle"
                type="dashed"
                className={clsx(
                  "!h-auto !p-2 !mr-[12px] last:!mr-0",
                  actionData.style,
                  actionData.title === "Bookmark" && "ml-auto"
                )}
                onClick={actionData.onClick}
              >
                <actionData.icon className="w-5 h-5" />
              </Button>
            </Tooltip>
          ))}
        </div>

        {/* Caption, likes and comments */}
        <div className="px-5">
          {postLikes?.length > 0 &&
            (postLikes.length === 1 ? (
              <p className="font-bold mb-2">{postLikes.length} like</p>
            ) : (
              <p className="font-bold mb-2">{postLikes.length} likes</p>
            ))}
          {/* caption */}
          <p className="mb-2">
            <Link href={`/${postUserName}`} className="font-bold mr-1">
              {postUserName}
            </Link>
            {postCaption}
          </p>
          {postCommentCount > 0 && (
            <button className="text-gray-500 mb-2">
              {`View ${postCommentCount} ${
                postCommentCount === 1 ? "comment" : "comments"
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

        {/* post timestamp */}
        <div className="px-5 pb-4 pt-2 wordSpace block uppercase text-[10px] font-[500] text-gray-400">
          <Moment fromNow>{moment(postTimeStamp)?.toDate()}</Moment>
        </div>

        {/* Input box */}
        <form className="hidden border-t py-4 md:flex items-center px-5">
          <button type="button" onClick={() => setShowPicker(true)}>
            <BsEmojiSmile className="w-6 h-6" />
          </button>
          <input
            className="flex-1 border-none outline-none placeholder:font-[500] placeholder:text-gray-400 mx-[10px] block"
            type="text"
            name="comment"
            placeholder="Add a comment..."
            id="comment"
            value={comment}
            autoComplete="off"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            type="primary"
            disabled={!comment?.trim()}
            className="font-semibold text-primary disabled:text-primary/50"
            htmlType="submit"
          >
            Post
          </Button>
        </form>
      </section>
    </div>
  );
};

export default PostCard;
