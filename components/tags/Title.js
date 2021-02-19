import React from "react";
import styles from './Title.module.scss';

const Title = ({children, color="black"}) => {
  return (
    <h2 className={styles.title + " " + color}> 
      {children}  
    </h2>
    
  );
}

export default Title;