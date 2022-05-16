import React from 'react'
import styles from './FilterButton.module.css'

const FilterButton = ({name, selected, onClick}) => {
  return (
    <button className={styles.button} onClick={() => onClick()}>{name}</button>
  )
}

export default FilterButton