import React, { useContext, useState } from "react";
import ReviewsTexts from "./components/ReviewsTexts/ReviewsTexts";
import ReviewsMenu from "./components/ReviewsMenu/ReviewsMenu";
import ReviewsDropdown from "./components/ReviewsDropdown/ReviewsDropdown";
import ReviewsShowMore from "./components/ReviewsShowMore/ReviewsShowMore";
import styles from "./Reviews.module.css";
import {
  controversialSort,
  recentSort,
  highestRatedSort,
} from "../../utilities/sorting/sorting";
import { ToggleDropDown } from "../ClickOutsideContext/ClickOutsideContext";

const Reviews = ({ reviewInfo, setReviewInfo, dropState, setDropState }) => {
  const open = useContext(ToggleDropDown).dropDownOpen;
  const setOpen = useContext(ToggleDropDown).setDropDownOpen;
  const [showPages, setShowPages] = useState(1);

  const select = (newState) => {
    setDropState(newState);
    setOpen(open ? false : true);

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
        newReviews.sort(controversialSort);
        break;
      default:
        console.log("drop down state not correct");
    }

    setReviewInfo({ ...reviewInfo, reviews: newReviews });
  };

  return (
    <div className={styles.container}>
      <ReviewsMenu
        dropState={dropState}
        numReviews={reviewInfo.reviews.length}
        reviewInfo={reviewInfo}
      />
      <ReviewsDropdown open={open} select={select} dropState={dropState} />
      <ReviewsTexts
        reviewInfo={reviewInfo}
        pages={showPages}
        setReviewInfo={setReviewInfo}
      />

      <ReviewsShowMore
        showPages={showPages}
        reviewInfo={reviewInfo}
        setShowPages={setShowPages}
      />
    </div>
  );
};

export default React.memo(Reviews);
