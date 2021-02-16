import React from 'react';
import Link from 'next/link';
import styles from './Btn.module.scss';

const BtnLink = ( {children, href="#", color="main", auto=false} ) => {

  let style = color == 'main' ? styles.main : styles.danger;
  
  if(auto){
    style += " " + styles.widthAuto;
  }

  return (
    <Link href={href}>
      <a className={`${styles.button} ${ style }`}>
        {children}
      </a>
    </Link>
  )
}

export default BtnLink;