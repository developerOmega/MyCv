import React from 'react';
import Link from 'next/link';
import styles from './Btn.module.scss';

const BtnLink = ( {children, href="#", color="main"} ) => {

  const style = color == 'main' ? styles.main : styles.danger; 

  return (
    <Link href={href}>
      <a className={`${styles.button} ${ style }`}>
        {children}
      </a>
    </Link>
  )
}

export default BtnLink;