import React from "react";
import styles from "./ReviewsShowMore.module.css";

const ReviewsShowMore = ({ showPages, reviewInfo, setShowPages }) => {
  return (
    <div className={styles.pageSelect}>
      <h3 className={styles.showTitle}>
        Showing page {showPages} of {Math.ceil(reviewInfo.reviews.length / 10)}
      </h3>
      {showPages < Math.ceil(reviewInfo.reviews.length / 10) && (
        <button
          onClick={() => setShowPages(showPages + 1)}
          className={styles.button}
        >
          Show More
        </button>
      )}
      {showPages > 1 && (
        <button className={styles.button} onClick={() => setShowPages(1)}>
          Hide
        </button>
      )}
    </div>
  );
};

export default ReviewsShowMore;
