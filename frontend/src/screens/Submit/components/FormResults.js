import React from "react";
import styles from "./FormResults.module.css";

const FormResults = ({ input, type, setInput, setResults }) => {
  const handleClick = (i) => {
    console.log("setting with input : ", i);
    setInput(i);
    setResults([]);
  };
  if (!input) {
    return <></>;
  }
  return (
    <ul className={styles.container}>
      {input.map((i, ind) => (
        <li
          className={styles.result}
          key={ind}
          onClick={() => handleClick(i.name)}
        >
          {i.name}
        </li>
      ))}
    </ul>
  );
};

export default FormResults;
