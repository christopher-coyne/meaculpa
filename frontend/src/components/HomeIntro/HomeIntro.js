import React from 'react';
import styles from './HomeIntro.module.css'
import Searchbar from '../Searchbar/Searchbar.js'
import scale from'../../assets/scale_icon.svg'

const HomeIntro = () => {
  return <div className={styles.container}>
      <div className={styles.siteName}>
      <img src={scale} alt="scale logo" className={styles.image}/>
          MeaCulpa
      </div>
      <p className={styles.explore}>Explore 100s of Columbia Course and Professor Reviews</p>
      <p className={styles.exploreApi}>Taken from Culpa's dataset, available at culpa.app</p>
      <Searchbar />
      <div className={styles.submitContainer}>
        <h2 id={styles.submitPrompt}>Want your voice heard? Submit a new review!</h2>
        <button className={styles.submitBtn}>Submit</button>
      </div>
  </div>;
};

export default HomeIntro;
