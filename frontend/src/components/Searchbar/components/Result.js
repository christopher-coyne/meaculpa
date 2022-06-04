import React from "react";
import styles from "./Result.module.css";
import { Link } from "react-router-dom";

const Result = ({ text }) => {
  return (
    <Link
      to={
        text.type === "course"
          ? `/course-review/:${text.id}`
          : `/professor-review/:${text.id}`
      }
      style={{ textDecoration: "none" }}
    >
      <div className={styles.result}>{text.name}</div>
    </Link>
  );
};

export default Result;
