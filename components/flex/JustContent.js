import React from 'react';
import styles from './JustContent.module.scss';

const JustContent = ({ children, type = 'flex-start', className=""}) => {

  let style = styles.flex + " " + className;
 
  switch(type){
    case 'flex-end':
      style += " " + styles.end;
      break;
    case 'center': 
      style += " " + styles.center;
      break;
    default:
      style = style;
  }

  return (
    <div className={style}>
      {children}
    </div>
  )
}

export default JustContent;