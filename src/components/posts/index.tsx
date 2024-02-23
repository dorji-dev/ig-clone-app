import React from "react";
import PostCard from "./post-card";
import { getPosts } from "@lib/services/post.service";
import NoPostContent from "./no-posts-content";

const PostList = async () => {
  const postsResponse = await getPosts();

  return (
    <>
      {postsResponse ? (
        postsResponse.documents.map((post) => (
          <div key={post.name} className="mb-6">
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <NoPostContent />
      )}
    </>
  );
};

export default PostList;
