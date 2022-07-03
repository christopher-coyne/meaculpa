import React from "react";
import styles from "./ReviewsShowMore.module.css";
import Button from "../../../../basicComponents/Button/Button";

const ReviewsShowMore = ({ showPages, reviewInfo, setShowPages }) => {
  return (
    <div className={styles.pageSelect}>
      <h3 className={styles.showTitle}>
        Showing page {showPages} of {Math.ceil(reviewInfo.reviews.length / 10)}
      </h3>
      {showPages < Math.ceil(reviewInfo.reviews.length / 10) && (
        <Button
          onClick={() => setShowPages(showPages + 1)}
          input={"Show More"}
          type="lightBlue"
          margin
        />
      )}
      {showPages > 1 && (
        <Button
          onClick={() => setShowPages(1)}
          input={"Hide"}
          type="lightBlue"
        />
      )}
    </div>
  );
};

export default ReviewsShowMore;
