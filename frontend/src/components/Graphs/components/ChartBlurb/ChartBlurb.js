import React from "react";
import styles from "./ChartBlurb.module.css";

const ChartBlurb = ({ category, header, content, type, children }) => {
  if (type === "scatter") {
    return (
      <div className={`${styles.scatter}`}>
        <div className={styles.circle} />
        <h3 className={styles.category}>{category}</h3>
        <hr className={styles.break} />
        <h1 className={styles.title}>{header}</h1>
        <p className={styles.content}>{content}</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <h3 className={styles.category}>{category}</h3>
      <hr className={styles.break} />
      <h1 className={styles.title}>{header}</h1>
      <p className={styles.content}>{content}</p>
      {children}
    </div>
  );
};

export default ChartBlurb;
