import React from 'react';
import TeachesCard from './components/TeachesCard/TeachesCard'
import TitleCard from './components/TitleCard/TitleCard'

const ReviewsSidebar = ({subject, type, reviews}) => {
  return <>
    <TitleCard subject={subject} type={type} reviews={reviews}/>
    <TeachesCard />
  </>;
};

export default ReviewsSidebar;
