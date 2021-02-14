import React from 'react';
import styles from './Btn.module.scss';

const Btn = ( {children ,type, color="main"} ) => {

  const style = color == 'main' ? styles.main : styles.danger; 

  return (
    <button type={type} className={`${styles.button} ${ style }`}>
      {children}
    </button>
  )
}

export default Btn;