import React from 'react';
import styles from './ButtonLink.module.scss';

const ButtonLink = ( {children} ) => {
  return (
    <div className={styles.button}>
      {children}
    </div>
  )
}

export default ButtonLink;