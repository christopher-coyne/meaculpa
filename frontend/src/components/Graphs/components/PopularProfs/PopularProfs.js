import React from "react";

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
      <h6 style={{ fontSize: "16px", fontWeight: "600" }}>
        Top Years by Professor
      </h6>
      <ul>
        {profs.map((prof, ind) => {
          return (
            <li
              key={ind}
              style={{
                fontWeight: "600",
                margin: "5px 10px",
                fontFamily: "lato",
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
