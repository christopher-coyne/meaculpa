import React from 'react';
import styles from './Navbar.module.css';
import Logo from './components/Logo.js'

const Navbar = () => {
  return (
  <div className={styles.navbar}>
      <Logo />
      <div className={styles.navContainer}>
        <button className={styles.navButton}>
            Submit
        </button>
        <div className={styles.navLink}>
          Full Data
        </div>
      </div>
  </div>
  );
};

export default Navbar;
