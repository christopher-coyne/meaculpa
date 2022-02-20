import React from 'react';
import styles from './TitleCard.module.css'

const TitleCard = ({type, subject, reviews}) => {
  console.log('type : ', type, ' subject : ', subject)
  return <div className={styles.card}>
    <h1 className={styles.title}> sup </h1>
  </div>;
};

export default TitleCard;
