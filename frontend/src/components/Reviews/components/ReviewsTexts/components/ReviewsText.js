import React from 'react';
import styles from './ReviewsText.module.css';

const ReviewsText = ({review}) => {
  // console.log('review from texts : ', review)
  const capName = review.name ? review.name.split(" ").map(str => str[0].toUpperCase() + str.slice(1)).join(" ") : ''
  if (!review) {
    return <></> 
  }
  else {
    return <div className={styles.container}>
      <h1 className={styles.title}>{capName}</h1>
      <h2 className={styles.date}>{review.date}</h2>
      <hr className={styles.break}></hr>
      <p className={styles.content}>
      {review.content}
      </p>
      <h3 className={styles.workloadTitle}>
        {review.workload ? 'Workload' : ''}
      </h3>
        <p className={styles.content}>
          {review.workload}
        </p>
      <button className={styles.agree}>
        {review.agree} Agree
      </button>
      <button className={styles.agree}>
        {review.disagree} Disagree
      </button>
    </div>;
  }
};

export default ReviewsText;
