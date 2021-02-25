import React from 'react';
import styles from './TextFlex.module.scss';

const TextFlex = ( {children, justify = "none"} ) => {

  let style = styles.flex;

  switch(justify) {
    case "space-between":
      style += " " + styles.justifyContent;
      break;
    case "center":
      style += " " + styles.center;
      break;
    default: 
      style = style;
  }

  return (
    <div className={style}>
      { children }
    </div>
  )
}

export default TextFlex;