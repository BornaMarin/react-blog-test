import type { CommentType } from "../../../../core/post/models";
import styles from "./Comment.module.scss";
import type { FC } from "react";

const Comment: FC<CommentType> = (comment) => (
  <div className={styles.comment}>
    <div className={styles.connector}>
      <div className={styles.line} />
      <div className={styles.curvedLine} />
    </div>
    <div className={styles.main}>
      <p className={styles.email}>{comment.email}</p>
      <p className={styles.content}>{comment.body}</p>
    </div>
  </div>
);

export default Comment;
