import React from 'react';
import styles from './TextFlex.module.scss';

const TextFlex = ( {children} ) => {
  return (
    <div className={styles.flex}>
      { children }
    </div>
  )
}

export default TextFlex;