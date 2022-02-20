import React from 'react';
import TeachesCard from './components/TeachesCard/TeachesCard'
import TitleCard from './components/TitleCard/TitleCard'

const ReviewsSidebar = ({subject, type, reviews}) => {
  console.log('REVIEW SIDEBAR : subject : ', subject, ' type : ', type, '  reviews :  ', reviews)
  return <>
    <TitleCard subject={subject} type={type}/>
    <TeachesCard />
  </>;
};

export default ReviewsSidebar;
