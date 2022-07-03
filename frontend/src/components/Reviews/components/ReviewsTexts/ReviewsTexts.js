import React from "react";
import ReviewsText from "./components/ReviewsText.js";

/* cap reviews to 15 per page */
const ReviewsTexts = ({ reviewInfo, pages, setReviewInfo }) => {
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
