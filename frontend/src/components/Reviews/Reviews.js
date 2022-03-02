import React from 'react';
import ReviewsTexts from './components/ReviewsTexts/ReviewsTexts'
import ReviewsDropdown from './components/ReviewsDropdown/ReviewsDropdown'

const Reviews = ({type, subject, reviews}) => {
  return <>
    <ReviewsDropdown />
    <ReviewsTexts type={type} subject={subject} reviews={reviews}/>
  </>;
};

export default Reviews;
