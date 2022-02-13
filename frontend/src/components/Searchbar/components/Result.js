import React from 'react';
import style from './Result.module.css'

const Result = ({text}) => {
  return <div className={style.result}>
      {text}
  </div>;
};

export default Result;
