import styles from "./HomeIntro.module.css";
import Searchbar from "../Searchbar/Searchbar.js";
import scale from "../../assets/scale_icon.svg";
import { Link } from "react-router-dom";

const HomeIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.siteName}>
        <img src={scale} alt="scale logo" className={styles.image} />
        MeaCulpa
      </div>
      <h1 className={`${styles.explore} largeText`}>
        Explore 100s of Columbia Course and Professor Reviews
      </h1>
      <h2 className={`${styles.samples} medText`}>
        Sample Courses: Data Structures, Discrete Mathematics, Computer Vision
      </h2>
      <Searchbar />
      <div className={styles.submitContainer}>
        <h2 className={`${styles.submitPrompt} largeText`}>
          Don't Know Where to Start? Check Out Our Full Data Page!
        </h2>
        <Link className={styles.submitLink} to="/full-data">
          Full Data
        </Link>
      </div>
    </div>
  );
};

export default HomeIntro;
