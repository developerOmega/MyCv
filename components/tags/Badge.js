import React from 'react';
import styles from './Badge.module.scss';

const Badge = ( {children} ) => {
  return (
    <div className={styles.button}>
      {children}
    </div>
  )
}

export default Badge;