import React from "react";
import styles from "./TeachesCard.module.css";
import { Link } from "react-router-dom";
import Card from "../../../../basicComponents/Card/Card";

const TeachesCard = ({ reviewInfo }) => {
  if (!reviewInfo || !reviewInfo.reviews) {
    return <> </>;
  }

  const link_dict = {};
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
  console.log("ink sorted", link_sorted);

  return (
    <Card>
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
    </Card>
  );
};

/* return (reviews.map(review => {return <>hello</>})) */

/*
const TeachesCard = ({type, subject, reviews}) => {
  console.log('reviews from teaches card : ', reviews)
  if (!reviews || reviews.length == 0) {
    return <>hello</>;
  }
  return (<div className={styles.teachesCard}>
      {reviews.map(review => {
        const myLink = type =="professor" ? `course-review/:${review.prof_id}` : `professor-review/:${review.course_id}`
        return <Link to={myLink} className={styles.link}>sup {review.name}</Link>
      })}
      hello2
      </div>);
};
*/

export default TeachesCard;
