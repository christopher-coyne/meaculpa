import React, { useContext } from "react";
import styles from "./ReviewsDropdown.module.css";
import {
  OutsideContext,
  ToggleDropDown,
} from "../../../ClickOutsideContext/ClickOutsideContext";

const options = ["Recent", "Controversial", "Highest Rated"];

const ReviewsDropdown = ({ select, dropState }) => {
  const myref = useContext(OutsideContext);
  const open = useContext(ToggleDropDown).dropDownOpen;
  return (
    <>
      {open ? (
        <ul className={styles.dropdown} ref={myref}>
          {options.map((option, ind) => {
            if (option !== dropState) {
              return (
                <li
                  className={styles.option}
                  onClick={() => select(option)}
                  key={ind}
                >
                  {option}
                </li>
              );
            }
            return <React.Fragment key={ind} />;
          })}
        </ul>
      ) : (
        <> </>
      )}
    </>
  );
};

export default ReviewsDropdown;
