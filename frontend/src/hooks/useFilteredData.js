import { useState } from "react";
import axios from "../api/axios";

/* searches API on key change, sets state to anything that matches input */
const useFilteredData = () => {
  const [filteredData, setFilteredData] = useState([]);
  const fetchAndSetFilteredData = async (url, searchVal) => {
    if (!searchVal || searchVal.length < 1) {
      setFilteredData([]);
      return;
    }
    const { data } = await axios.get(url);
    setFilteredData(data.results);
  };

  return [filteredData, fetchAndSetFilteredData];
};

export default useFilteredData;
