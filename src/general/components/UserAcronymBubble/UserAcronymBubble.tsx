import styles from "./UserAcronymBubble.module.scss";
import type { FC } from "react";

interface UserAcronymProps {
  acronym: string;
}

const UserAcronymBubble: FC<UserAcronymProps> = ({ acronym }) => (
  <div className={styles.userBubble}>{acronym}</div>
);

export default UserAcronymBubble;
