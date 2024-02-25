import { Post } from "@lib/models";
import { Link } from "@router/customized";
import Image from "next/image";
import { imagePlaceholder } from "@lib/utils";
import clsx from "clsx";
import PostActions from "./post-actions";
import PostCardHeader from "./post-card-header";
import PostComments from "./post-comments";
import PostCommentForm from "./post-comment-form";
import PostCardTimeStamp from "./post-card-timestamp";
import { Suspense } from "react";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const postLikes = post.fields?.likes?.arrayValue?.values;
  const postUserName = post.fields?.username?.stringValue;
  const postCaption = post.fields?.caption?.stringValue;
  const postTimeStamp = post.fields?.timeStamp?.timestampValue;

  const postId = post.name.split("/").pop() as string;

  return (
    <div className="bg-white md:rounded-lg md:shadow-main_shadow relative">
      {/* Header */}
      <PostCardHeader
        userImage={post.fields?.userImage?.stringValue}
        userName={post.fields?.username?.stringValue}
      />

      <figure
        className={clsx(
          post.fields?.imageFilter?.stringValue,
          "h-[400px] relative overflow-hidden"
        )}
      >
        <Image
          className="object-cover"
          fill
          placeholder="blur"
          blurDataURL={imagePlaceholder}
          sizes="(max-width: 767px) 100vw, (min-width: 768px) 70vw"
          src={post.fields?.postImage?.stringValue ?? imagePlaceholder} // avoid errors on post upload: see ImageUpload component
          alt="post image"
        />
      </figure>
      <section className="pt-5">
        <PostActions />
        <div className="px-5">
          {postLikes?.length > 0 &&
            (postLikes.length === 1 ? (
              <p className="font-bold mb-2">{postLikes.length} like</p>
            ) : (
              <p className="font-bold mb-2">{postLikes.length} likes</p>
            ))}

          <p className="mb-2">
            <Link href={`/${postUserName}`} className="font-bold mr-1">
              {postUserName}
            </Link>
            {postCaption}
          </p>
          <Suspense fallback={<div>Loading comments ...</div>}>
            <PostComments postId={postId} />
          </Suspense>
        </div>
        <PostCardTimeStamp postTimeStamp={postTimeStamp} />
        <PostCommentForm />
      </section>
    </div>
  );
};

export default PostCard;
