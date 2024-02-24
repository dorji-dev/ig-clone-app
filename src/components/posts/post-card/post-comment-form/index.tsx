import EmojiPicker from "@component/emoji-picker";
import { Button } from "antd";
import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";

const PostCommentForm = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <>
      {showPicker && (
        <EmojiPicker
          onClose={() => setShowPicker(false)}
          onSelect={(emoji) =>
            setComment((prevComment) => prevComment + emoji.native)
          }
        />
      )}
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
    </>
  );
};

export default PostCommentForm;
