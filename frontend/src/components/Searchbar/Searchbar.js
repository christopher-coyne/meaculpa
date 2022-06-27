import { React, useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import Result from "./components/Result";
import axios from "axios";

const Searchbar = () => {
  // const [userInput, setUserInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const printInput = async (e) => {
    if (!e || e.length < 1) {
      setFilteredData([]);
      return;
    }

    // don't search until the user enters in at least 4 letters
    console.log("input e : ", e);
    const { data } = await axios.get(`/match-term-all/${e}`);
    console.log("results from search : ", data.results);
    setFilteredData(data.results);
  };

  return (
    <>
      <input
        type="text"
        className={styles.searchBar}
        onKeyUp={(e) => printInput(e.target.value)}
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

      {filteredData.length === 0 ? (
        <p className={styles.prompt}>See full data with insights here</p>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Searchbar;
