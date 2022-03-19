import React, { useEffect, useState } from 'react'
import styles from './Submit.module.css'
import Navbar from '../../components/Navbar/Navbar'
import FormResults from './components/FormResults'
import { Link } from 'react-router-dom'
import axios from 'axios'

/* <Link className={styles.back}>Back</Link> */
const Submit = () => {
    const [professorInput, setProfessorInput] = useState('')
    const [courseInput, setCourseInput] = useState('')

    const [professorResults, setProfessorResults] = useState([])
    const [courseResults, setCourseResults] = useState([])

    const searchInput = async (e, type) => {
        if (!e || e.length <= 3) {
            type === 'professor' ? setProfessorResults([]) : setCourseResults([])
          return;
        }
    
        // don't search until the user enters in at least 4 letters
        if (e.length >= 3) {
          console.log("input e : ", e)
          const url = type === 'professor' ? `/search-prof-name/${e}` : `/search-course-name/${e}`
          const {data} = await axios.get(url)
          console.log("results from search : ", data)
          type === 'professor' ? setProfessorResults(data.profs) : setCourseResults(data.courses)
          // setProfessorResults(data.results);
        }
    }
  return (<>
  <Navbar></Navbar>
  <div className={styles.container}>
      <form>
          <h1 className={styles.title}>Add Your Feedback</h1>
          <hr className={styles.break}></hr>
          <label for="professor" className={styles.label}>Professor</label>
          <input type="text" id="professor" className={styles.input} placeholder="Select from options" onKeyUp={(e) => searchInput(e.target.value, 'professor')}></input>
          <FormResults input={professorResults} type="professor"/>
          <label for="course" className={styles.label}>Course</label>
          <input type="text" id="course" className={styles.input} placeholder="Select from options" onKeyUp={(e) => searchInput(e.target.value, 'course')}></input>
          <FormResults input={courseResults} type="course"/>
          <label for="reviewbody" className={styles.label}>Review Body</label>
          <input type="text" id="reviewbody" className={`${styles.input} ${styles.largeInput}`} placeholder="Limit to <10k characters"></input>
          <label for="workload" className={styles.label}>Workload</label>
          <input type="text" id="workload" className={`${styles.input} ${styles.largeInput}`} placeholder="Limit to <10k characters"></input>
          <p className={styles.terms}>By submitting, you are agreeing to our terms and conditions</p>
      </form>
  </div>;
  </>)
};

export default Submit;
