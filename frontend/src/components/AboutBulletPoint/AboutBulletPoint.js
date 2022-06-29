import React from "react";
import styles from "./AboutBulletPoint.module.css";

const AboutBulletPoint = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} largeText`}>
        {">"}
        {title}
      </div>
      <div className={`${styles.title} medText`}>{text}</div>
    </div>
  );
};

export default AboutBulletPoint;
