import React from "react";
import FormError from "../FormError/FormError";
import FormResults from "../FormResult/FormResults";
import styles from "./SearchInput.module.css";
import useFilteredData from "../../../hooks/useFilteredData";
import capitalize from "../../../utilities/capitalize";
import { useCallback } from "react";

const SearchInput = ({ errors, input, setInput, type }) => {
  const [filteredData, setFilteredData] = useFilteredData([]);

  const printInput = useCallback(
    (e) => {
      setFilteredData(
        `/${type === "professor" ? "professor" : "course"}/name/${
          e.target.value
        }`,
        e.target.value
      );
      setInput(e.target.value);
    },
    [setFilteredData, setInput, type]
  );
  return (
    <>
      <label htmlFor={type} className={styles.label}>
        {capitalize(type)}
      </label>
      <p className={`${styles.terms} smallText`}>
        {type === "professor"
          ? "Examples: Adam Cannon, Jae Lee, Paul Blaer..."
          : "Computer Vision, Data structures, Discrete Mathematics..."}
      </p>
      {errors.professor && type === "professor" && (
        <FormError error={errors.professor} errorType={type} />
      )}
      {errors.course && type === "course" && (
        <FormError error={errors.course} errorType={type} />
      )}
      <input
        type="text"
        id="professor"
        className={styles.input}
        placeholder="Select from options"
        onChange={(e) => printInput(e)}
        value={input}
      ></input>
      <FormResults
        input={filteredData}
        type={type}
        setInput={setInput}
        setResults={setFilteredData}
      />
    </>
  );
};

export default React.memo(SearchInput);
