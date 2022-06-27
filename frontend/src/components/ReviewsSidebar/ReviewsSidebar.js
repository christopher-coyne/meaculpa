import React from "react";
import styles from "./ReviewsSidebar.module.css";

const ReviewsSidebar = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ReviewsSidebar;
