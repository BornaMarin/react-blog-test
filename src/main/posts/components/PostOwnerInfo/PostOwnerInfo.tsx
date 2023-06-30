import type { UserType } from "../../../../core/user/models";
import { formatOwnerUsername } from "../../../../general/helpers";
import styles from "./PostOwnerInfo.module.scss";
import type { FC } from "react";

const PostOwnerInfo: FC<UserType> = ({ name, username }) => {
  const formattedUsername = formatOwnerUsername(username);
  return (
    <div className={styles.owner}>
      <p>{name}</p>
      <p className={styles.username}>{formattedUsername}</p>
    </div>
  );
};

export default PostOwnerInfo;
