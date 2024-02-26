"use client";

import EmojiPicker from "@component/emoji-picker";
import { addComment } from "@lib/actions";
import { AddCommentPayload } from "@lib/models";
import { Button, Form, notification } from "antd";
import React, { useState, useTransition } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { useGetCurrentUserQuery } from "../../../../lib/state/slice";

interface PostCommentFormProps {
  postId: string;
}

const PostCommentForm = ({ postId }: PostCommentFormProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const [comment, setComment] = useState("");
  const [isPending, startTransition] = useTransition();
  const { data: currentUser } = useGetCurrentUserQuery();
  const [api, contextHolder] = notification.useNotification();

  const handleAddComment = async () => {
    if (!currentUser) {
      return;
    }
    startTransition(async () => {
      const payload: AddCommentPayload = {
        text: {
          stringValue: comment,
        },
        likes: {
          arrayValue: {
            values: [],
          },
        },
        userId: {
          stringValue: currentUser?.users?.[0]?.localId,
        },
        postId: {
          stringValue: postId,
        },
        userImage: {
          stringValue: "",
        },
        username: {
          stringValue: `@${currentUser?.users?.[0]?.email.split("@")[0]}`,
        },
        timeStamp: {
          timestampValue: new Date().toISOString(),
        },
      };

      const res = await addComment(payload);
      if (res.status === "success") {
        setComment("");
        api.success({
          message: "Commented",
          description: "Comment added successfully",
          className: "!p-[20px] !shadow-main_shadow rounded-[8px]",
        });
      } else {
        api.success({
          message: "Oops",
          description:
            "There was an unexpected error, can you please try again?",
          className: "!p-[20px] !shadow-main_shadow rounded-[8px]",
        });
      }
    });
  };

  return (
    <>
      {contextHolder}
      {showPicker && (
        <EmojiPicker
          onClose={() => setShowPicker(false)}
          onSelect={(emoji) =>
            setComment((prevComment) => prevComment + emoji.native)
          }
        />
      )}
      <Form
        className="hidden border-t !py-4 md:flex items-center !px-5"
        onFinish={handleAddComment}
      >
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
          loading={isPending}
        >
          {isPending ? "Adding" : "Add"}
        </Button>
      </Form>
    </>
  );
};

export default PostCommentForm;
