import {React, useEffect, useState} from 'react';
import styles from './Searchbar.module.css'
import magnifyingGlass from '../../assets/search-solid.svg'
import testData from './data'
import Result from './components/Result'
import axios from 'axios'

const Searchbar = () => {
  // const [userInput, setUserInput] = useState('');
  const [filteredData, setFilteredData] = useState([])

  /*
  useEffect(() => {
    // Update the document title using the browser API
    // test search
    if 
    const fetchData = async () => {
      const { data } = await axios.get('/search-prof-name/adam')
      console.log('data ', data)
    }
    fetchData()
  }, []);
  */

  const fetchData = async () => {
    const { data } = await axios.get('/search-prof-name/adam')
    console.log('data ', data)
    return data;
  }
  const printInput = async (e) => {
    if (!e || e.length <= 3) {
      setFilteredData([]);
      return;
    }

    // don't search until the user enters in at least 4 letters
    if (e.length >= 3) {
      console.log("input e : ", e)
      const {data} = await axios.get(`/match-term-all/${e}`)
      console.log("results from search : ", data.results)
      setFilteredData(data.results);
    }
  }

  /*
  const printInput = (e) => {
    if (!e) {
      setFilteredData([]);
      return;
    }
    console.log("input e : ", e)
    const data = testData.filter(d => {
      return d.includes(e)
    })
    setFilteredData(data);
  }
  */


  return <>
      <input type="text" className={styles.searchBar} onKeyUp={(e) => printInput(e.target.value)}></input>
      <button className={styles.searchButton}>
        <img src={magnifyingGlass} alt="search" className={styles.magnifying}></img>
      </button>

      {filteredData.length > 0 ?
      <div className={styles.results}>
          {filteredData.map(data => <Result text={data}/>)}
      </div> : <> </>}

      {filteredData.length === 0 ? <div className={styles.prompt}>
      See full data with insights here
      </div> : <> </>}
  </>;
};

export default Searchbar;
