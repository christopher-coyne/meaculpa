import React from "react";
import styles from "./PopularProfs.module.css";

const profs = [
  { "Adam Cannon": "2011 -12 Reviews" },
  { "Paul Blaer": "2009 - 12 Reviews" },
  { "Martha Kim": "2017 - 18 Reviews" },
];

/*
using inline style here since child of another react component. CSS modules will not work
*/

const PopularProfs = () => {
  return (
    <>
      <h7 style={{ "font-size": "16px" }}>Top Years by Professor</h7>
      <ul>
        {profs.map((prof) => {
          return (
            <li
              style={{
                "font-weight": "600",
                margin: "5px 10px",
                "font-family": "lato",
              }}
            >
              {Object.keys(prof)}{" "}
              <span style={{ color: "#4C8DFD" }}>{Object.values(prof)}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PopularProfs;

/*
{Object.keys(prof)}{" "}
              <span className={styles.reviewNum}>{Object.values(prof)}</span>
              */
