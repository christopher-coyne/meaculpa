import React from 'react';
import styles from './ReviewsDropdown.module.css'
import mainLogo from'../../../../assets/comments-solid.svg'

const ReviewsDropdown = () => {
  return <div className={styles.container}>
      <div>
            <span className={styles.reviewNumber}>
                <img src={mainLogo} alt="comments" className={styles.image}/>
              35 Reviews
            </span>
          <span className={styles.reviewFilter}>Sort By: most recent</span>
      </div>
      <button className={styles.addReview}>
        + Add Review
      </button>
  </div>;
};

export default ReviewsDropdown;
