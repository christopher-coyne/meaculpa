import React from 'react';
import ReviewsText from './components/ReviewsText.js'

/* cap reviews to 15 per page */
const ReviewsTexts = ({reviewInfo}) => {
  return <>
    {reviewInfo.reviews && reviewInfo.reviews.slice(0,10).map(review => <ReviewsText review={review}/>)}
  </>;
};

export default ReviewsTexts;
