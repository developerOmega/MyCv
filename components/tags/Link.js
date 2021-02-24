import React from 'react';
import styles from "./Link.module.scss";
const Link = ( { children, href="#", target="_blank" } ) => {
  return (
    <a target={target} href={href} className={styles.link}> {children} </a>
  );
}

export default Link;
