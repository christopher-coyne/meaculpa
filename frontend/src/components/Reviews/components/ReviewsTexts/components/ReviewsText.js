import { React, useState, useRef, useEffect } from "react";
import styles from "./ReviewsText.module.css";
import ExpandButton from "../../../../ExpandButton/ExpandButton";
import { useLocation } from "react-router-dom";

const ReviewsText = ({ review }) => {
  const location = useLocation();

  const newReview = location.pathname.split("/")[2];

  console.log("new review from review: ", review);

  // console.log('review from texts : ', review)
  const [expanded, setExpanded] = useState(false);
  const capName = review.name
    ? review.name
        .split(" ")
        .map((str) => str[0].toUpperCase() + str.slice(1))
        .join(" ")
    : "";
  console.log("expanded : ", expanded);
  const changeExpanded = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };
  if (!review) {
    return <></>;
  } else {
    return (
      <div
        className={`${styles.container} ${expanded && styles.expanded} ${
          review.review_id === newReview && styles.newReview
        }`}
      >
        <h1 className={styles.title}>{capName}</h1>
        <h2 className={styles.date}>{review.date}</h2>
        <hr className={styles.break}></hr>
        <p className={styles.content}>{review.content}</p>
        <h3 className={styles.workloadTitle}>
          {review.workload ? "Workload" : ""}
        </h3>
        <p className={styles.content}>{review.workload}</p>
        <p className={styles.reactions}>
          <span className={styles.agree}>{review.agree} Agree</span>{" "}
          <span className={styles.disagree}>{review.disagree} Disagree</span>
        </p>
        {review.workload.length + review.content.length > 500 && (
          <ExpandButton
            changeExpand={() => changeExpanded()}
            expanded={expanded}
          />
        )}
      </div>
    );
  }
};

export default ReviewsText;
