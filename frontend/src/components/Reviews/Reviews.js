import React, { useState } from "react";
import ReviewsTexts from "./components/ReviewsTexts/ReviewsTexts";
import ReviewsDropdown from "./components/ReviewsDropdown/ReviewsDropdown";
import styles from "./Reviews.module.css";

const options = ["Recent", "Controversial", "Highest Rated"];

const months = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const recentSort = (a, b) => {
  const adate = a.date.replace(",", "").split(" ");
  const bdate = b.date.replace(",", "").split(" ");

  if (parseInt(adate[2]) !== parseInt(bdate[2])) {
    return parseInt(bdate[2]) - parseInt(adate[2]);
  }
  // month
  if (months[adate[0]] !== months[bdate[0]]) {
    return months[bdate[0]] - months[adate[0]];
  }
  // day
  if (parseInt(adate[1]) !== parseInt(bdate[1])) {
    return parseInt(bdate[1]) - parseInt(adate[1]);
  }

  return bdate;
};

const highestRatedSort = (a, b) => {
  return b.agree - b.disagree - (a.agree - a.disagree);
};

const constroversialSort = (a, b) => {
  return b.disagree - a.disagree;
};

const Reviews = ({ reviewInfo, setReviewInfo }) => {
  const [open, setOpen] = useState(0);
  const [dropState, setDropState] = useState("Recent");
  const [showPages, setShowPages] = useState(1);

  const select = (newState) => {
    setDropState(newState);
    setOpen((open + 1) % 2);

    // update review info
    console.log("reviews from click : ", reviewInfo);

    // sort them based on state
    // sort by most recent to oldest
    let newReviews = [...reviewInfo.reviews];
    switch (newState) {
      case "Recent":
        newReviews.sort(recentSort);
        break;
      case "Highest Rated":
        newReviews.sort(highestRatedSort);
        break;
      case "Controversial":
        newReviews.sort(constroversialSort);
        break;
      default:
        console.log("drop down state not correct");
    }

    console.log("sorted revs : ", newReviews);
    setReviewInfo({ ...reviewInfo, reviews: newReviews });
  };

  if (!reviewInfo.reviews) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <ReviewsDropdown
        setOpen={setOpen}
        open={open}
        dropState={dropState}
        numReviews={reviewInfo.reviews.length}
      />
      {open == 1 ? (
        <ul className={styles.dropdown}>
          {options.map((option) => {
            if (option !== dropState) {
              return (
                <li className={styles.option} onClick={() => select(option)}>
                  {option}
                </li>
              );
            }
            return <></>;
          })}
        </ul>
      ) : (
        <> </>
      )}
      <ReviewsTexts reviewInfo={reviewInfo} pages={showPages} />

      <div className={styles.pageSelect}>
        <h3 className={styles.showTitle}>
          Showing page {showPages} of{" "}
          {Math.ceil(reviewInfo.reviews.length / 10)}
        </h3>
        <button
          onClick={() => setShowPages(showPages + 1)}
          className={styles.hidePageButton}
        >
          View More
        </button>
        {showPages > 1 && (
          <button
            className={styles.hidePageButton}
            onClick={() => setShowPages(1)}
          >
            Hide
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;

/*
<li className={styles.option} onClick={() => select('Recent')}>Recent</li>
<li className={styles.option} onClick={() => select('Controversial')}>Controversial</li>
<li className={styles.option} onClick={() => select('Highest Rated')}>Highest Rated</li>
*/
