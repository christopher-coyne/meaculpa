import React from "react";
import styles from "./ReviewsDropdown.module.css";

const options = ["Recent", "Controversial", "Highest Rated"];

const ReviewsDropdown = ({ open, select, dropState }) => {
  return (
    <>
      {open === 1 ? (
        <ul className={styles.dropdown}>
          {options.map((option) => {
            if (option !== dropState) {
              return (
                <li className={styles.option} onClick={() => select(option)}>
                  {option}
                </li>
              );
            }
            return <></>;
          })}
        </ul>
      ) : (
        <> </>
      )}
    </>
  );
};

export default ReviewsDropdown;
