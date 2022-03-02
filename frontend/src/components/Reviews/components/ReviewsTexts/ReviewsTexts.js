import React from 'react';
import ReviewsText from './components/ReviewsText.js'

const ReviewsTexts = ({type, reviews, subject}) => {
  console.log('reviews from reviewstexts: ', reviews)
  return <>
    {reviews.map(review => <ReviewsText review={review}/>)}
  </>;
};

export default ReviewsTexts;
