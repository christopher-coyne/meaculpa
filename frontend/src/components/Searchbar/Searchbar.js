import React from 'react';
import styles from './Searchbar.module.css'
import magnifyingGlass from '../../assets/search-solid.svg'
import data from './data'
import Result from './components/Result'

const Searchbar = () => {
  return <>
      <input type="text" className={styles.searchBar}></input>
      <button className={styles.searchButton}>
        <img src={magnifyingGlass} alt="whatever" className={styles.magnifying}></img>
      </button>
      <div className={styles.results}>
          {data.map(data => <Result text={data}/>)}
      </div>

      <div className={styles.prompt}>
      See full data with insights here
      </div>
  </>;
};

export default Searchbar;
