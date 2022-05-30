import React, { useEffect, useState } from "react";
import ReviewsSidebar from "../../components/ReviewsSidebar/ReviewsSidebar";
import Reviews from "../../components/Reviews/Reviews";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import styles from "./Review.module.css";
import axios from "axios";

const Review = () => {
  const [reviewInfo, setReviewInfo] = useState({});
  const location = useLocation();
  // console.log("results from search : ", data.results)
  const reviewType = location.pathname.replace("/", "").split("-")[0];
  const id = location.pathname.split(":")[1];

  // get all reviews associated with this id
  useEffect(() => {
    const fetchData = async () => {
      console.log("id and review type : ", id, " ", reviewType);

      const { data } = await axios.get(`/get-${reviewType}-reviews/${id}`);
      console.log("data ", data);

      setReviewInfo({ ...data.results, type: reviewType });
      setTimeout(function () {
        console.log("review object : ", reviewInfo);
      }, 1);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <ReviewsSidebar reviewInfo={reviewInfo} />
        <Reviews reviewInfo={reviewInfo} setReviewInfo={setReviewInfo} />
      </div>
    </>
  );
};

export default Review;

/*
<div className={styles.reviews}>
            <Reviews type={reviewType} subject={reviewInfo[reviewType] ? reviewInfo[reviewType][0] : null} reviews={reviewInfo.reviews ? reviewInfo : {}} setReviewInfo={setReviewInfo}/>
        </div>
        */
