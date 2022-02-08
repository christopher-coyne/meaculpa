import React from 'react';
import styles from './Navbar.module.css';
import Logo from './components/Logo.js'

const Navbar = () => {
  return (
  <div className={styles.navbar}>
      <Logo />
      <div className={styles.navContainer}>
        <div className={styles.navButton}>
            Submit
        </div>
        <div className={styles.navLink}>
          Full Data
        </div>
      </div>
  </div>
  );
};

export default Navbar;
