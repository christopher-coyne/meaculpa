import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Review = () => {
    const location = useLocation()
    console.log('path name : ', location.pathname)
    console.log("results from search : ", data.results)

    // get all reviews associated with this id
    useEffect = () => {
        const fetchData = async () => {
            const {data} = await axios.get(`/get-reviews-prof/${e}`)
        }
    }
  return <>
      <Navbar />
      
  </>;
};

export default Review;
