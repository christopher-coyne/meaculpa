import React from "react";
import styles from "./TitleCard.module.css";
import goldNugget from "../../../../assets/gold-nugget3.svg";
import silverNugget from "../../../../assets/silver-nugget.svg";

const capitalize = (myStr) => {
  return myStr
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const TitleCard = ({ reviewInfo }) => {
  let nugget =
    reviewInfo.professor && reviewInfo.professor[0]
      ? reviewInfo.professor[0].nugget
      : "none";
  if (!reviewInfo.course && !reviewInfo.professor) {
    return <> </>;
  }
  return (
    <div className={styles.card}>
      {nugget === "gold" && (
        <img src={goldNugget} alt="gold nugget" className={styles.nugget}></img>
      )}
      {nugget === "silver" && (
        <img
          src={silverNugget}
          alt="gold nugget"
          className={styles.nugget}
        ></img>
      )}
      <h1
        className={`${styles.title} ${
          reviewInfo.professor ? styles.prof : styles.course
        }`}
      >
        {" "}
        {reviewInfo.professor
          ? capitalize(reviewInfo.professor[0].name)
          : capitalize(reviewInfo.course[0].name)}{" "}
      </h1>
    </div>
  );
};

/*
    <div className={styles.headerContainer}>
      <h2 className={styles.subheader}>{reviewInfo.type ? reviewInfo.type : ''}</h2>
      <h2 className={styles.subheader}>{`${reviewInfo.reviews ? reviewInfo.reviews.length : 0} Reviews`}</h2>
    </div>
    */

/*
<h2 className={styles.subheader}>
          {reviewInfo.type ? reviewInfo.type : ""}{" "}
        </h2>
*/

export default TitleCard;
