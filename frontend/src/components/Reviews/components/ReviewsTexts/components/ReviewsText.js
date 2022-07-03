import { React, useState } from "react";
import styles from "./ReviewsText.module.css";
import ExpandButton from "../../../../ExpandButton/ExpandButton";
import { useLocation } from "react-router-dom";
import capitalize from "../../../../../utilities/capitalize";
import axios from "axios";

const removePost = async (id, setReviewInfo, reviewInfo) => {
  console.log("rev info remove : ", reviewInfo);
  const { data } = await axios.post(`/remove-post/${id}`);
  console.log("data from remove post : ", data);

  setReviewInfo({
    ...reviewInfo,
    reviews: reviewInfo.reviews.filter((rev) => {
      return rev.review_id !== id;
    }),
  });
};

const ReviewsText = ({ review, setReviewInfo, reviewInfo }) => {
  const location = useLocation();

  const newReview = location.pathname.split("/")[2];
  // console.log('review from texts : ', review)
  const [expanded, setExpanded] = useState(false);
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
        } card`}
      >
        <h1 className={`${styles.title} largeText`}>
          {capitalize(review.name)}
        </h1>
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
        {review.date.includes("2022") && (
          <button
            className={styles.deleteButton}
            onClick={() => {
              removePost(review.review_id, setReviewInfo, reviewInfo);
            }}
          >
            Delete
          </button>
        )}
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
