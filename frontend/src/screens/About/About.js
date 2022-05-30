import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./About.module.css";
import scale from "../../assets/scale_icon.svg";
import aboutText from "./AboutText.js";
import AboutBulletPoint from "../../components/AboutBulletPoint/AboutBulletPoint";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Navbar />
      <div className={styles.titleContainer}>
        <img src={scale} alt="scale logo" id={styles.image} />
        <div>
          About <span className={styles.logo}>MeaCulpa</span>
        </div>
      </div>
      <div className={styles.aboutContent}>
        {aboutText.map((about) => (
          <AboutBulletPoint title={about.title} text={about.text} />
        ))}
      </div>
    </div>
  );
};

export default About;
