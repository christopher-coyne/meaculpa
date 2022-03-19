import React from 'react';
import TeachesCard from './components/TeachesCard/TeachesCard'
import TitleCard from './components/TitleCard/TitleCard'

const ReviewsSidebar = ({reviewInfo}) => {
  return <>
    <TitleCard reviewInfo={reviewInfo}/>
    <TeachesCard reviewInfo={reviewInfo}/>
  </>;
};

export default ReviewsSidebar;
