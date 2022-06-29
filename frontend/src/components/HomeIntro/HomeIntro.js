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
      <p className={`${styles.explore} largeText`}>
        Explore 100s of Columbia Course and Professor Reviews
      </p>
      <p className={styles.exploreApi}>
        Sample Courses: Data Structures, Discrete Mathematics, Computer Vision
      </p>
      <Searchbar />
      <div className={styles.submitContainer}>
        <h2 id={styles.submitPrompt}>
          Don't Know Where to Start? Check Out Our Full Data Page!
        </h2>
        <Link className={styles.submitLink} to="/full-data">
          Full Data And Insights
        </Link>
      </div>
    </div>
  );
};

export default HomeIntro;
