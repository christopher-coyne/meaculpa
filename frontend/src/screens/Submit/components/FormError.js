import React from 'react';
import styles from './FormResult.module.css'

const FormError = (error) => {
  return <h2 className={styles.error}>{error}</h2>;
};

export default FormError;
