import React from "react";
import styles from "./ReviewsTexts.module.css";
import ReviewsText from "./components/ReviewsText.js";

/* cap reviews to 15 per page */
const ReviewsTexts = ({ reviewInfo, pages, setReviewInfo }) => {
  if (reviewInfo.reviews.length === 0) {
    return (
      <div className={styles.noReviews}>
        No reviews have been added yet. Click above to add your own.
      </div>
    );
  }
  return (
    <>
      {reviewInfo.reviews &&
        reviewInfo.reviews
          .slice(0, 10 * pages)
          .map((review, ind) => (
            <ReviewsText
              review={review}
              key={ind}
              setReviewInfo={setReviewInfo}
              reviewInfo={reviewInfo}
            />
          ))}
    </>
  );
};

export default React.memo(ReviewsTexts);
