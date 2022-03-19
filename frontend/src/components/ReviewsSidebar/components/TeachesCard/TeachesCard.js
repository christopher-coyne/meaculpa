import React from 'react';
import styles from './TeachesCard.module.css'
import { Link } from "react-router-dom";

function onlyUnique(val, index, self) {
  return self.indexOf(val) === index;
}

const TeachesCard = ({reviewInfo}) => {
  console.log('all from teaches card')
  console.log('type ', reviewInfo.type)
  console.log('type ', reviewInfo.type)
  console.log('type ', reviewInfo.type)
  if (!reviewInfo || !reviewInfo.reviews ) {
    return <>hello</>;
  }

  const link_dict = {}
  if (reviewInfo.reviews) {
    reviewInfo.reviews.forEach(review => {
      link_dict[review.name] = review.course_id
    })
  }

  return <div className={styles.container}>
    <h1 className={styles.title}>Courses taught by this professor: </h1>
    {Object.keys(link_dict).map(link => {
    const myLink = reviewInfo.type =="professor" ? `/course-review/:${link_dict[link]}` : `/professor-review/:${link_dict[link]}`
    return <Link to={myLink} className={styles.link}>{link}</Link>
  })}</div>

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
