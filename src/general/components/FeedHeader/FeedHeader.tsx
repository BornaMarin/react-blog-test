import styles from "./FeedHeader.module.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import type { ReactNode } from "react";

interface header {
  content?: ReactNode;
  hideBackBtn: boolean;
}

const FeedHeader: FC<header> = ({ content, hideBackBtn }) => {
  const justifyHeader = hideBackBtn
    ? styles.justifyEnd
    : styles.justifySpaceBetween;
  return (
    <div className={`${styles.postsHeader} ${justifyHeader}`}>
      {hideBackBtn ? null : (
        <div>
          <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
        </div>
      )}
      {content}
    </div>
  );
};

export default FeedHeader;
