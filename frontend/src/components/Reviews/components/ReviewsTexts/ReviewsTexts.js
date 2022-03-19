import React from 'react';
import ReviewsText from './components/ReviewsText.js'

const ReviewsTexts = ({reviewInfo}) => {
  return <>
    {reviewInfo.reviews && reviewInfo.reviews.map(review => <ReviewsText review={review}/>)}
  </>;
};

export default ReviewsTexts;
