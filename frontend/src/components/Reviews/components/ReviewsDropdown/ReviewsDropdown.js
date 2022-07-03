import { useContext } from "react";
import styles from "./ReviewsDropdown.module.css";
import { OutsideContext } from "../../../ClickOutsideContext/ClickOutsideContext";

const options = ["Recent", "Controversial", "Highest Rated"];

const ReviewsDropdown = ({ open, select, dropState }) => {
  const myref = useContext(OutsideContext);
  console.log("ref val : ", myref.current);
  return (
    <>
      {open === 1 ? (
        <ul className={styles.dropdown} ref={myref}>
          {options.map((option) => {
            if (option !== dropState) {
              return (
                <li className={styles.option} onClick={() => select(option)}>
                  {option}
                </li>
              );
            }
            return <></>;
          })}
        </ul>
      ) : (
        <> </>
      )}
    </>
  );
};

export default ReviewsDropdown;
