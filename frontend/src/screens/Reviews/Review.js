import React, { useEffect, useState } from 'react';
import ReviewsSidebar from '../../components/ReviewsSidebar/ReviewsSidebar'
import Reviews from '../../components/Reviews/Reviews'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import styles from './Review.module.css'
import axios from 'axios'

const Review = () => {
    const [reviewInfo, setReviewInfo] = useState({})
    const location = useLocation()
    // console.log("results from search : ", data.results)
    const reviewType = location.pathname.replace('/', '').split('-')[0]
    const id = location.pathname.split(':')[1]

    // get all reviews associated with this id
    useEffect (() => {
        const fetchData = async () => {
            console.log('id and review type : ', id, ' ', reviewType)

            const {data} = await axios.get(`/get-${reviewType}-reviews/${id}`)
            console.log('data ', data)
            setReviewInfo(data.results)

        }
        fetchData()
    }, [])
  return <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.sidebar}>
            <ReviewsSidebar type={reviewType} subject={reviewInfo[reviewType]} reviews={reviewInfo.reviews ? reviewInfo.reviews.length : 0}/>
        </div>
        <div className={styles.reviews}>
            <Reviews />
        </div>
      </div>
  </>;
};

export default Review;
