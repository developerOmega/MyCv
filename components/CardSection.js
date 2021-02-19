import React from 'react';

import styles from './CardSection.module.scss';

const CardSection = ({section}) => {

  return(
    <div className={styles.card} >
      { section.img != "" ? <img src={section.img} /> :  <></>}
      <p> {section.content} </p>
    </div> 
  );
}

export default CardSection;