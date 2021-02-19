import React from 'react';
import IMG from './tags/IMG';
import Image from 'next/image';

import styles from './CardSection.module.scss';

const CardSection = ({section}) => {

  //<IMG img={section.img} height="50" />
  // <Image src={section.img} width="100" height="100"  layout="responsive"/>

  return(
    <div className={styles.card} >
      { section.img != "" ? <img src={section.img} /> :  <></>}
      <p> {section.content} </p>
    </div> 
  );
}

export default CardSection;