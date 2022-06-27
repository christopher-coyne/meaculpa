import React, { useEffect, useState } from "react";
import ReviewsSidebar from "../../components/ReviewsSidebar/ReviewsSidebar";
import TeachesCard from "../../components/ReviewsSidebar/components/TeachesCard/TeachesCard";
import TitleCard from "../../components/ReviewsSidebar/components/TitleCard/TitleCard";
import Reviews from "../../components/Reviews/Reviews";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import styles from "./Review.module.css";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import NotFound from "../NotFound/NotFound";

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

const Review = () => {
  const [reviewInfo, setReviewInfo] = useState({});
  const [dropState, setDropState] = useState("Recent");
  const location = useLocation();

  // review type: professor or course
  const reviewType = location.pathname.replace("/", "").split("-")[0];
  const id = location.pathname.split(":")[1];

  // get all reviews associated with this id
  useEffect(() => {
    const fetchData = async () => {
      //console.log("id and review type : ", id, " ", reviewType);

      const { data } = await axios.get(`/get-${reviewType}-reviews/${id}`);
      console.log("data from base review : ", data);

      let unfound = false;
      if (
        (data.results.professor && !data.results.professor.length) ||
        (data.results.course && !data.results.course.length)
      ) {
        unfound = true;
      }

      setDropState("Recent");

      setReviewInfo({
        ...data.results,
        reviews: data.results.reviews.sort(recentSort),
        type: reviewType,
        unfound: unfound,
      });
    };
    fetchData();
  }, [location, id, reviewType]);

  if (reviewInfo.unfound) {
    return <NotFound />;
  }
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {!reviewInfo.type ? (
          <div className={styles.loadingContainer}>
            <Loading text={"Loading please wait..."} />
          </div>
        ) : (
          <>
            <ReviewsSidebar>
              <TitleCard reviewInfo={reviewInfo} />
              <TeachesCard reviewInfo={reviewInfo} />
            </ReviewsSidebar>
            <Reviews
              reviewInfo={reviewInfo}
              setReviewInfo={setReviewInfo}
              setDropState={setDropState}
              dropState={dropState}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Review;
