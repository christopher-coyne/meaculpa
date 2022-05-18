import React from 'react';
import TeachesCard from './components/TeachesCard/TeachesCard'
import TitleCard from './components/TitleCard/TitleCard'
import styles from './ReviewsSidebar.module.css'

const ReviewsSidebar = ({reviewInfo}) => {
  return <div className={styles.container}>
    <TitleCard reviewInfo={reviewInfo}/>
    <TeachesCard reviewInfo={reviewInfo}/>
  </div>;
};

export default ReviewsSidebar;
