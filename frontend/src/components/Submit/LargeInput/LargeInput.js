import React from "react";
import FormError from "../FormError/FormError";
import styles from "./LargeInput.module.css";
import capitalize from "../../../utilities/capitalize";

const LargeInput = ({ error, type }) => {
  return (
    <>
      <label
        htmlFor={type === "content" ? "Review" : "Workload"}
        className={styles.label}
      >
        {capitalize(type === "content" ? "Review" : "Workload")}
      </label>
      {error ? <FormError error={error} errorType={type} /> : <></>}
      <textarea
        type="text"
        id="reviewbody"
        className={`${styles.input} ${styles.largeInput}`}
        placeholder="Limit to <10k characters"
      ></textarea>
    </>
  );
};

export default React.memo(LargeInput);
