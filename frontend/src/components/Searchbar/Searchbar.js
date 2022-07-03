import { React, useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import Result from "./components/Result";
import axios from "axios";
import useFilteredData from "../../hooks/useFilteredData";

const Searchbar = () => {
  // const [userInput, setUserInput] = useState('');
  /*
  const [filteredData, setFilteredData] = useState([]);
  const printInput = async (e) => {
    const searchVal = e.target.value;
    console.log("e ", e.target.value);
    if (!searchVal || searchVal.length < 1) {
      setFilteredData([]);
      return;
    }

    // don't search until the user enters in at least 1 letters
    const { data } = await axios.get(`/match-term-all/${searchVal}`);
    console.log("results from search : ", data.results);
    setFilteredData(data.results);
  };
  */
  const [filteredData, setFilteredData] = useFilteredData();
  const printInput = async (e) => {
    setFilteredData(`/match-term-all/${e.target.value}`, e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className={styles.searchBar}
        onKeyUp={(e) => printInput(e)}
      ></input>

      {filteredData.length > 0 ? (
        <div className={styles.results}>
          {filteredData.map((data, ind) => (
            <Result text={data} key={ind} />
          ))}
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Searchbar;
