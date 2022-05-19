import React from 'react'
import styles from './ExpandButton.module.css'
import triangle from '../../assets/triangle.svg'

const ExpandButton = ({changeExpand, expanded}) => {
  return (
    <button className={styles.expand} onClick={() => changeExpand()}><img className={`${styles.triangle} ${expanded && styles.rotated}`} src={triangle}/></button>
  )
}

export default ExpandButton