import React from 'react';
import IMG from './tags/IMG';
import styles from './CardSection.module.scss';

const CardSection = ({section}) => {
  return(
    <div className={styles.card} >
      { section.img != "" ? <IMG img={section.img} height="50" /> : <></>}
      <p> {section.content} </p>
    </div> 
  );
}

export default CardSection;