import React from 'react';
import styles from './HomeIntro.module.css'
import HomeSearch from './components/HomeSearch'

const HomeIntro = () => {
  return <div className={styles.container}>
      <h1 className={styles.siteName}>MeaCulpa</h1>
      <p className={styles.explore}>Explore 100s of Columbia Course and Professor Reviews</p>
      <p className={styles.exploreApi}>Taken from Culpa's dataset, available at culpa.app</p>
      <HomeSearch />
      <div id={styles.searchDetails}>
            <p>See full data with insights here</p>
      </div>
  </div>;
};

export default HomeIntro;
