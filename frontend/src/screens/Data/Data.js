import {React, useState, useEffect} from 'react';
import styles from './Data.module.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

const Data = () => {
    const [coursePop, setCoursePop] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            const {data} = await axios.get(`/get-popular-courses-full`)
            console.log('data ', data)

        }
        fetchData()
    }, [])
  return <>
        <Navbar />
      <h1 className={styles.title}>Full Data and Insights</h1>
  </>;
};

export default Data;
