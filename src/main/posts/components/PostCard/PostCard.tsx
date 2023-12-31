import type PostType from "../../../../core/post/models/PostType";
import { UserAcronymBubble } from "../../../../general/components/UserAcronymBubble";
import { capitalize } from "../../../../general/helpers";
import { PostOwnerInfo } from "../PostOwnerInfo";
import styles from "./PostCard.module.scss";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import type { MouseEvent } from "react";

const PostCard: FC<PostType> = ({
  title,
  id,
  body,
  comments,
  user,
  expand,
}) => {
  const handleOnClick = (event: MouseEvent) => {
    event.preventDefault();
    expand({ id: id });
  };
  return (
    <article role="article" className={styles.post}>
      <UserAcronymBubble acronym="BM" />
      <div className={styles.content}>
        <PostOwnerInfo {...user} />
        <p className={styles.header}>{capitalize(title)}</p>
        <p>{body}</p>
        <div className={styles.footer}>
          <button
            aria-label="Show Comments"
            onClick={handleOnClick}
            disabled={!expand}
            className={styles.button}
          >
            <FontAwesomeIcon className={styles.icon} icon={faComment} />
            {comments.length} Comments
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
