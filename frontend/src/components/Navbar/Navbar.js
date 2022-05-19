import React from 'react';
import styles from './Navbar.module.css';
import Logo from './components/Logo.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div className={styles.navbar}>
      <Logo />
      <div className={styles.navContainer}>
        <Link className={styles.navButton} to="/submit">
            Submit
        </Link>
        <Link className={styles.navLink} to="/full-data">
          Full Data
        </Link>
      </div>
  </div>
  );
};

export default Navbar;
