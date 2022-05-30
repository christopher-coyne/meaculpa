import React from "react";
import style from "./Result.module.css";
import { Link } from "react-router-dom";

const Result = ({ text }) => {
  return (
    <div className={style.result}>
      <Link
        to={
          text.type === "course"
            ? `/course-review/:${text.id}`
            : `/professor-review/:${text.id}`
        }
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        {text.name}
      </Link>
    </div>
  );
};

export default Result;
