import React from 'react';
import styles from './TitleCard.module.css'
import goldNugget from '../../../../assets/gold-nugget3.svg'

const TitleCard = ({reviewInfo}) => {
  // console.log('title card : type : ', type, ' subject : ', subject, ' reviews : ', reviews)
  return <div className={styles.card}>
    <img src={goldNugget} alt="gold nugget" className={styles.nugget}></img>
    
    <h1 className={styles.title}> {reviewInfo.professor ? reviewInfo.professor[0].name : 'NA'} </h1>

    <div className={styles.headerContainer}>
      <h2 className={styles.subheader}>{reviewInfo.type ? reviewInfo.type : ''}</h2>
      <h2 className={styles.subheader}>{`${reviewInfo.reviews ? reviewInfo.reviews.length : 0} Reviews`}</h2>
    </div>

  </div>;
};

export default TitleCard;
