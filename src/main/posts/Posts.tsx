import type { PostParams } from "../../core/post/models";
import { FeedHeader } from "../../general/components/FeedHeader";
import { FieldInput } from "../../general/components/FieldInput";
import { Pagination } from "../../general/components/Pagination";
import type { Entity } from "../../general/models";
import styles from "./Posts.module.scss";
import { Comment } from "./components/Comment";
import { PostCard } from "./components/PostCard";
import { usePosts } from "./hooks";
import type { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Posts: FC = () => {
  const [postsParams, setPostsParams] = useState<PostParams>({
    _page: 1,
    _limit: 10,
    userId: null,
    q: "",
    _expand: "user",
    _embed: "comments",
  });
  const [expandedPost, setExpandedPost] = useState<number | null>();

  const { posts, arePostsLoading } = usePosts(postsParams);

  const expandPostComments = (entity: Entity) => {
    if (expandedPost === entity.id) {
      setExpandedPost(null);
    } else {
      setExpandedPost(entity.id);
    }
  };

  const handleSearchChange = (value: string) => {
    setPostsParams({ ...postsParams, q: value });
  };
  const handlePageChange = (value: number) => {
    setPostsParams({ ...postsParams, _page: value });
  };

  const noDataState = () => (
    <div className={styles.loadingContainer}>No data</div>
  );
  return (
    <>
      <FeedHeader
        content={
          <FieldInput
            type={"text"}
            disabled={false}
            name={"q"}
            ariaLabel={"search posts by author"}
            id={"search-input"}
            placeholder={"search"}
            handleSearchChange={handleSearchChange}
          />
        }
        hideBackBtn={true}
      />
      {arePostsLoading ? (
        <div className={styles.loadingContainer}>Loading...</div>
      ) : (
        posts?.map((post) => (
          <Link
            to={"/posts/" + post.id}
            key={"post-" + post.id}
            style={{ textDecoration: "none" }}
          >
            <PostCard {...post} expand={expandPostComments} />
            {post.id === expandedPost
              ? post.comments.map((comment) => (
                  <Comment key={"comment-" + comment.id} {...comment} />
                ))
              : null}
          </Link>
        ))
      )}
      {!posts?.length && !arePostsLoading ? (
        noDataState()
      ) : (
        <Pagination
          page={postsParams._page}
          lastPage={10}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Posts;
