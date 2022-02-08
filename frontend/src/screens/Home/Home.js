import React from 'react';
import styles from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar'
import mainLogo from'../../assets/lionlogocropped.svg'
import HomeIntro from '../../components/HomeIntro/HomeIntro'

const Home = () => {
  return (
  <div className={styles.gradient}>
    <Navbar />
    <div className={styles.homeIntro}>
    <HomeIntro />
    </div>
    <img src={mainLogo} alt="lion logo" className={styles.image}/>
  </div>
  );
};

export default Home;
