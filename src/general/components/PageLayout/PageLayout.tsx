import styles from "./PageLayout.module.scss";
import type { FC, PropsWithChildren } from "react";

const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <main className={styles.layout}>{children}</main>
);

export default PageLayout;
