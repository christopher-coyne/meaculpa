import React from "react";
import styles from "./Loading.module.css";

/* loading CSS taken from https://loading.io/css/ */
const Loading = ({ text }) => {
  return (
    <div className={styles.container}>
      <h1>{text}</h1>
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
