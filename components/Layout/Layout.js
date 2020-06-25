import React from "react";
import styles from "./Layout.scss";

export const Layout = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
