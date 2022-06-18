import React, { useEffect, useState } from "react";
import styles from "./Submit.module.css";
import Navbar from "../../components/Navbar/Navbar";
import FormResults from "./components/FormResults";
import { Link } from "react-router-dom";
import FormError from "./components/FormError";
import formLogo from "../../assets/form_icon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* <Link className={styles.back}>Back</Link> */
const Submit = () => {
  const history = useNavigate();
  const [professorInput, setProfessorInput] = useState("");
  const [courseInput, setCourseInput] = useState("");

  const [professorResults, setProfessorResults] = useState([]);
  const [courseResults, setCourseResults] = useState([]);

  const [errors, setErrors] = useState({
    professor: false,
    course: false,
    content: false,
    workload: false,
    createdReview: {},
  });

  useEffect(() => {
    /* if we have created a review successfully, migrate to that page */
    if (Object.keys(errors.createdReview).length !== 0) {
      const newUrl =
        "/professor-review/" +
        errors.createdReview.review_id +
        "/:" +
        errors.createdReview.prof_id;
      history(newUrl);
    }
  }, [errors]);

  const searchInput = async (e, type) => {
    console.log("e input ", e.target.value);
    type === "professor"
      ? setProfessorInput(e.target.value)
      : setCourseInput(e.target.value);
    console.log(" e ", e);
    if (!e || e.target.value.length <= 3) {
      type === "professor" ? setProfessorResults([]) : setCourseResults([]);
      return;
    }

    // don't search until the user enters in at least 4 letters
    if (e.target.value.length >= 3) {
      // console.log("input e : ", e.nativeEvent.data)
      const url =
        type === "professor"
          ? `/search-prof-name/${e.target.value}`
          : `/search-course-name/${e.target.value}`;
      const { data } = await axios.get(url);
      console.log("results from search : ", data);
      type === "professor"
        ? setProfessorResults(data.profs)
        : setCourseResults(data.courses);
      // setProfessorResults(data.results);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitting...", e.target[2].value);
    const professor = e.target[0].value;
    const course = e.target[1].value;
    const content = e.target[2].value;
    const workload = e.target[3].value;
    const url = "/submit";
    const { data } = await axios.post(url, {
      professor,
      course,
      content,
      workload,
    });

    setErrors({
      professor: data.professor,
      course: data.course,
      content: data.content,
      workload: data.workload,
      createdReview: data.createdReview,
    });
    console.log("results from submit : ", data);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <button className={styles.back} onClick={() => history(-1)}>
          {"< back"}
        </button>
        <form
          className={styles.form}
          onSubmit={(e) => submitHandler(e)}
          autoComplete="off"
        >
          <img className={styles.icon} src={formLogo} alt="lion logo" />
          <h1 className={styles.title}>Add Your Feedback</h1>
          <hr className={styles.break}></hr>
          <label htmlFor="professor" className={styles.label}>
            Professor
          </label>
          {errors.professor ? (
            <FormError error={errors.professor} errorType="professor" />
          ) : (
            <></>
          )}
          <input
            type="text"
            id="professor"
            className={styles.input}
            placeholder="Select from options"
            onChange={(e) => searchInput(e, "professor")}
            value={professorInput}
          ></input>
          <FormResults
            input={professorResults}
            type="professor"
            setInput={setProfessorInput}
            setResults={setProfessorResults}
          />
          <label htmlFor="course" className={styles.label}>
            Course
          </label>
          {errors.course ? (
            <FormError error={errors.course} errorType="course" />
          ) : (
            <></>
          )}
          <input
            type="text"
            id="course"
            className={styles.input}
            placeholder="Select from options"
            onChange={(e) => searchInput(e, "course")}
            value={courseInput}
          ></input>
          <FormResults
            input={courseResults}
            type="course"
            setInput={setCourseInput}
            setResults={setCourseResults}
          />
          <label htmlFor="reviewbody" className={styles.label}>
            Review Body
          </label>
          {errors.content ? (
            <FormError error={errors.content} errorType="content" />
          ) : (
            <></>
          )}
          <textarea
            type="text"
            id="reviewbody"
            className={`${styles.input} ${styles.largeInput}`}
            placeholder="Limit to <10k characters"
          ></textarea>
          <label htmlFor="workload" className={styles.label}>
            Workload
          </label>
          {errors.workload ? (
            <FormError error={errors.workload} errorType="workload" />
          ) : (
            <></>
          )}
          <textarea
            type="text"
            id="workload"
            className={`${styles.input} ${styles.largeInput}`}
            placeholder="Limit to <10k characters"
          ></textarea>
          <p className={styles.terms}>
            By submitting, you are agreeing to our terms and conditions
          </p>
          <input
            type="submit"
            className={styles.button}
            placeholder="Submit"
          ></input>
        </form>
      </div>
      ;
    </>
  );
};

export default Submit;
