import { React, useState, useRef, useEffect } from "react";
import styles from "./ReviewsText.module.css";
import ExpandButton from "../../../../ExpandButton/ExpandButton";

const ReviewsText = ({ review }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
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
        className={`${styles.container} ${expanded && styles.expanded}`}
        ref={ref}
      >
        <div>{height}</div>
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
        <ExpandButton
          changeExpand={() => changeExpanded()}
          expanded={expanded}
        />
      </div>
    );
  }
};

export default ReviewsText;
