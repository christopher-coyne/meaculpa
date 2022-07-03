import React from "react";
import styles from "./FormError.module.css";

const messages = {
  professor: "Please enter a valid professor",
  course: "Please enter a valid course",
  workload: "Please describe how heavy the workload was for this course",
  content: "Please enter a review of this course",
};

const FormError = ({ error, errorType }) => {
  return error ? (
    <h2 className={`${styles.error} smallText`}>
      {errorType ? messages[errorType] : "Error"}
    </h2>
  ) : (
    <></>
  );
};

export default React.memo(FormError);
