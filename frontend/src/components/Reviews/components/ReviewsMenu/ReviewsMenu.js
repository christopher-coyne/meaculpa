import React from "react";
import styles from "./ReviewsMenu.module.css";
import { Link } from "react-router-dom";
import mainLogo from "../../../../assets/comments-solid.svg";

const ReviewsMenu = ({ setOpen, open, dropState, numReviews, reviewInfo }) => {
  const toggle = () => {
    setOpen((open + 1) % 2);
  };
  /*
  const url = reviewInfo.type === 'course' ? `/submit/course/${reviewInfo.course[0].name.replace(' ', '%')}` :
  `/submit/course/${reviewInfo.course[0].name.replace(' ', '%')}`
  */

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.reviewNumber}>
          <img src={mainLogo} alt="comments" className={styles.image} />
          {numReviews} Reviews
        </span>
        <span className={styles.reviewFilter} onClick={() => toggle()}>
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
