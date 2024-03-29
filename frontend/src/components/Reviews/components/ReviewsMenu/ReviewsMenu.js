import React from "react";
import styles from "./ReviewsMenu.module.css";
import { Link } from "react-router-dom";
import mainLogo from "../../../../assets/comments-solid.svg";
import { useContext } from "react";

import { ToggleDropDown } from "../../../ClickOutsideContext/ClickOutsideContext";
import { ButtonContext } from "../../../ClickOutsideContext/ClickOutsideContext";

const ReviewsMenu = ({ dropState, numReviews }) => {
  const open = useContext(ToggleDropDown).dropDownOpen;
  const setOpen = useContext(ToggleDropDown).setDropDownOpen;
  const myref = useContext(ButtonContext);

  const toggle = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <span className={`${styles.reviewNumber} largeText`}>
          <img src={mainLogo} alt="comments" className={styles.image} />
          {numReviews} Reviews
        </span>
        <span
          className={styles.reviewFilter}
          onClick={() => toggle()}
          ref={myref}
        >
          Sort By: {dropState} V
        </span>
      </div>
      <Link className={styles.addReview} to="/submit">
        + Add Review
      </Link>
    </div>
  );
};

export default ReviewsMenu;
