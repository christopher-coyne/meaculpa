import { React } from "react";
import styles from "./Searchbar.module.css";
import Result from "./components/Result";
import useFilteredData from "../../hooks/useFilteredData";

const Searchbar = () => {
  // const [userInput, setUserInput] = useState('');
  const [filteredData, setFilteredData] = useFilteredData();
  const printInput = async (e) => {
    setFilteredData(`/reviewentity/${e.target.value}`, e.target.value);
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
