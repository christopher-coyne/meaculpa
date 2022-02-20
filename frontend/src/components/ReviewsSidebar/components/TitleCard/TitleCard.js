import React from 'react';
import styles from './TitleCard.module.css'
import goldNugget from '../../../../assets/gold-nugget3.svg'

const TitleCard = ({type, subject, reviews}) => {
  console.log('title card : type : ', type, ' subject : ', subject, ' reviews : ', reviews)
  return <div className={styles.card}>
    <img src={goldNugget} alt="gold nugget" className={styles.nugget}></img>
    
    <h1 className={styles.title}> {subject ? subject.name : ''} </h1>

    <div className={styles.headerContainer}>
      <h2 className={styles.subheader}>{type ? type : ''}</h2>
      <h2 className={styles.subheader}>{reviews !== null ? `${reviews} Reviews` : ''}</h2>
    </div>

  </div>;
};

export default TitleCard;
