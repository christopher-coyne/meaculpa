import {React, useState, useEffect} from 'react';
import styles from './Data.module.css'
import Navbar from '../../components/Navbar/Navbar'
import LineGraph from '../../components/Graphs/LineGraph/LineGraph'
import BarChart from '../../components/Graphs/BarChart/BarChart'
import axios from 'axios'

const sampleData = [{ name: 'analysis of algorithms i', date: 'November 18, 2009' },
{ name: 'artificial intelligence', date: 'December 14, 2009' },
{ name: 'artificial intelligence', date: 'December 18, 2009' },
{ name: 'introduction to databases', date: 'December 22, 2009' },
{ name: 'artificial intelligence', date: 'January 02, 2010' },
{ name: 'analysis of algorithms i', date: 'January 02, 2010' },
{ name: 'operating systems i', date: 'January 03, 2010' },
{ name: 'artificial intelligence', date: 'April 15, 2010' },
{ name: 'introduction to databases', date: 'May 02, 2010' },
{ name: 'artificial intelligence', date: 'May 06, 2010' },
{ name: 'artificial intelligence', date: 'May 07, 2010' },
{ name: 'introduction to databases', date: 'May 12, 2010' },
{ name: 'user interface design', date: 'December 20, 2010' },
{ name: 'operating systems i', date: 'May 17, 2010' },
{ name: 'operating systems i', date: 'May 25, 2010' },
{ name: 'analysis of algorithms i', date: 'December 06, 2010' },
{ name: 'artificial intelligence', date: 'December 12, 2010' },
{ name: 'operating systems i', date: 'December 16, 2010' },
{ name: 'artificial intelligence', date: 'December 23, 2010' },
{ name: 'artificial intelligence', date: 'December 31, 2010' },
{ name: 'artificial intelligence', date: 'March 23, 2011' },
{ name: 'introduction to databases', date: 'May 15, 2011' },
{ name: 'introduction to databases', date: 'May 09, 2016' },
{ name: 'user interface design', date: 'July 18, 2011' },
{ name: 'artificial intelligence', date: 'January 05, 2012' },
{ name: 'analysis of algorithms i', date: 'January 11, 2012' },
{ name: 'artificial intelligence', date: 'April 27, 2012' },
{ name: 'introduction to databases', date: 'May 07, 2012' },
{ name: 'artificial intelligence', date: 'August 15, 2012' },
{ name: 'operating systems i', date: 'December 11, 2012' },
{ name: 'operating systems i', date: 'December 20, 2012' },
{ name: 'operating systems i', date: 'January 23, 2013' },
{ name: 'operating systems i', date: 'January 26, 2013' },
{ name: 'artificial intelligence', date: 'March 12, 2013' },
{ name: 'artificial intelligence', date: 'May 02, 2013' },
{ name: 'introduction to databases', date: 'May 19, 2013' },
{ name: 'artificial intelligence', date: 'May 19, 2013' },]

const barData = [
    {name: 'operating systems i', count: '7'},
    {name: 'introduction to databses', count: '5'},
    {name: 'computer graphics', count: '1'},
    {name: 'user interface design', count: '3'},
    {name: 'artificial intelligence', count: '2.5'},
    {name: 'analysis of algorithms', count: '1.1'},
    {name: 'computer vision', count: '4.33'},
    {name: 'data structures and algorithms', count: '5.3'},
]

const Data = () => {
    const [coursePop, setCoursePop] = useState([])

    /*
    useEffect(() => {
        const fetchData = async () => {

            const {data} = await axios.get(`/get-popular-courses-full`)
            console.log('data ', data)

        }
        fetchData()
    }, [])
    */
  return <>
        <Navbar />
      <h1 className={styles.title}>Full Data and Insights</h1>
      <BarChart data={barData} width={900} height={500}/>
  </>;
};

export default Data;
