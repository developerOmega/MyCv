import React from 'react';
import styles from './Screen.module.scss';

const Screen = ({children, style}) => {
  return (
    <div className={styles.screen} style={style}>
      {children}
    </div>
  );
}

export default Screen;