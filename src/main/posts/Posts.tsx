import type { PostParams } from "../../core/post/models";
import { FeedHeader } from "../../general/components/FeedHeader";
import { FieldInput } from "../../general/components/FieldInput";
import { PageLayout } from "../../general/components/PageLayout";
import { Pagination } from "../../general/components/Pagination";
import type { Entity } from "../../general/models";
import { Comment } from "./components/Comment";
import { Post } from "./components/Post";
import { usePosts } from "./hooks";
import type { FC } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Posts: FC = () => {
  const [postsParams, setPostsParams] = useState<PostParams>({
    _page: 1,
    _limit: 10,
    userId: null,
    search: "",
    _expand: "user",
    _embed: "comments",
  });
  const [expandedPost, setExpandedPost] = useState<number | null>();

  const { posts, arePostsLoading, refetchPosts } = usePosts(postsParams);

  const expandPostComments = (entity: Entity) => {
    if (expandedPost === entity.id) {
      setExpandedPost(null);
    } else {
      setExpandedPost(entity.id);
    }
  };

  const handleSearchChange = (value: string) => {
    setPostsParams({ ...postsParams, search: value });
  };

  return (
    <PageLayout>
      <FeedHeader
        content={
          <FieldInput
            type={"text"}
            disabled={false}
            name={"search"}
            ariaLabel={"search posts by author"}
            id={"search-input"}
            placeholder={"search"}
            handleSearchChange={handleSearchChange}
          />
        }
        hideBackBtn={false}
      />
      {posts?.map((post) => (
        <NavLink to={"/posts/" + post.id} key={"post-" + post.id}>
          <Post {...post} expand={expandPostComments} />
          {post.id === expandedPost
            ? post.comments.map((comment) => (
                <Comment key={"comment-" + comment.id} {...comment} />
              ))
            : null}
        </NavLink>
      ))}
      <Pagination page={postsParams._page} lastPage={10} />
    </PageLayout>
  );
};

export default Posts;
