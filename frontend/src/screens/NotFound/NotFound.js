import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>404: Not Found</h1>
      <p className={styles.paragraph}>
        Sorry, but that page appears to be unavailable :( . If you have any more
        questions, check out our
        <Link to="/about">about</Link> page or our <Link to="/">homepage</Link>
      </p>
    </>
  );
};

export default NotFound;
