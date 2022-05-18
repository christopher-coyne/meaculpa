import React from 'react';
import styles from './ReviewsDropdown.module.css'
import mainLogo from'../../../../assets/comments-solid.svg'

const ReviewsDropdown = ({setOpen, open, dropState, numReviews}) => {
  const toggle = () => {
    setOpen((open + 1)%2)
  }
  return <div className={styles.container}>
      <div>
            <span className={styles.reviewNumber}>
                <img src={mainLogo} alt="comments" className={styles.image}/>
              {numReviews} Reviews
            </span>
          <span className={styles.reviewFilter} onClick={() => toggle()}>Sort By: {dropState} V</span>
      </div>
      <button className={styles.addReview}>
        + Add Review
      </button>
  </div>;
};

export default ReviewsDropdown;
