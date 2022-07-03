import React from "react";
import styles from "./TeachesCard.module.css";
import { Link } from "react-router-dom";

const TeachesCard = ({ reviewInfo }) => {
  if (!reviewInfo || !reviewInfo.reviews) {
    return <> </>;
  }

  const link_dict = {};
  // fill dictionary
  if (reviewInfo.reviews && reviewInfo.professor) {
    reviewInfo.reviews.forEach((review) => {
      link_dict[review.name] = review.course_id;
    });
  } else if (reviewInfo.reviews && reviewInfo.course) {
    reviewInfo.reviews.forEach((review) => {
      link_dict[review.name] = review.prof_id;
    });
  }

  const link_sorted = [...Object.keys(link_dict)];
  link_sorted.sort();

  return (
    <div className={`${styles.container} card`}>
      <h1 className={styles.title}>
        {" "}
        {reviewInfo.professor
          ? "Courses taught by this professor: "
          : "Professors who teach this course: "}{" "}
      </h1>
      {link_sorted.map((link, ind) => {
        const myLink =
          reviewInfo.type === "professor"
            ? `/course-review/:${link_dict[link]}`
            : `/professor-review/:${link_dict[link]}`;
        return (
          <Link to={myLink} className={styles.link} key={ind}>
            {link}
          </Link>
        );
      })}
    </div>
  );
};

export default TeachesCard;
