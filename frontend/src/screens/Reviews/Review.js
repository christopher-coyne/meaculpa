import { useEffect, useState } from "react";
import ReviewsSidebar from "../../components/ReviewsSidebar/ReviewsSidebar";
import TeachesCard from "../../components/ReviewsSidebar/components/TeachesCard/TeachesCard";
import TitleCard from "../../components/ReviewsSidebar/components/TitleCard/TitleCard";
import Reviews from "../../components/Reviews/Reviews";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import styles from "./Review.module.css";
import axios from "../../api/axios";
import Loading from "../../components/Loading/Loading";
import NotFound from "../NotFound/NotFound";
import ClickOutsideContext from "../../components/ClickOutsideContext/ClickOutsideContext";
import { recentSort } from "../../utilities/sorting/sorting";

// export const ClickOutsideContext = React.createContext();
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

      console.log("fetching data from ", `/${reviewType}/reviews/${id}`);
      const { data } = await axios.get(`/${reviewType}/reviews/${id}`);

      let unfound = false;
      if (
        (data.results.professor && !data.results.professor.length) ||
        (data.results.course && !data.results.course.length)
      ) {
        unfound = true;
      }

      // reset the drop down filter to recent
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
      <ClickOutsideContext>
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
      </ClickOutsideContext>
    </>
  );
};

export default Review;
