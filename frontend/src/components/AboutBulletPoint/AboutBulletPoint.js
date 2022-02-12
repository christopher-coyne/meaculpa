import React from 'react';
import styles from './AboutBulletPoint.module.css'

const AboutBulletPoint = ({title, text}) => {
  return (<div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
  </div>
  );
};

export default AboutBulletPoint;
