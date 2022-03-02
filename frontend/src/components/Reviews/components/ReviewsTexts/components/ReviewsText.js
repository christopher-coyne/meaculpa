import React from 'react';
import styles from './ReviewsText.module.css';

const ReviewsText = ({review}) => {
  console.log('review from texts : ', review)
  if (!review) {
    return <></> 
  }
  else {
    return <div className={styles.container}>
      {review.content}
    </div>;
  }
};

export default ReviewsText;
