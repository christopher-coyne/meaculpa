import React, { useEffect, useState } from "react";
import styles from "./Submit.module.css";
import Navbar from "../../components/Navbar/Navbar";
import cards from "../../basicComponents/card.module.css";
import formLogo from "../../assets/form_icon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LargeInput from "../../components/Submit/LargeInput/LargeInput";
import SearchInput from "../../components/Submit/SearchInput/SearchInput";

/* <Link className={styles.back}>Back</Link> */
const Submit = () => {
  const history = useNavigate();
  const [professorInput, setProfessorInput] = useState("");
  const [courseInput, setCourseInput] = useState("");

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
  }, [errors, history]);

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
          className={`${styles.form} ${cards.card}`}
          onSubmit={(e) => submitHandler(e)}
          autoComplete="off"
        >
          <img className={styles.icon} src={formLogo} alt="Add" />
          <h1 className={styles.title}>Add Your Feedback</h1>
          <hr className={styles.break}></hr>
          <SearchInput
            errors={errors}
            input={professorInput}
            setInput={setProfessorInput}
            type="professor"
          />
          <SearchInput
            errors={errors}
            input={courseInput}
            setInput={setCourseInput}
            type="course"
          />
          <LargeInput error={errors.content} type="content" />
          <LargeInput error={errors.workload} type="workload" />
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
