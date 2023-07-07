import { FeedHeader } from "../../general/components/FeedHeader";
import { Comment } from "../posts/components/Comment";
import { PostCard } from "../posts/components/PostCard";
import usePost from "./hooks/usePost";
import type { FC } from "react";
import { useParams } from "react-router-dom";

const Post: FC = () => {
  const { postId } = useParams();
  const { post, isPostLoading } = usePost({ id: postId ? +postId : 0 });
  if (!post || isPostLoading) return null;
  return (
    <>
      <FeedHeader hideBackBtn={false} />
      <PostCard {...post} />
      {post.comments.map((comment) => (
        <Comment key={"comment-" + comment.id} {...comment} />
      ))}
    </>
  );
};

export default Post;
