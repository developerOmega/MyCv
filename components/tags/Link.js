import React from 'react';
import * as Li from 'next/link';
import styles from "./Link.module.scss";

const Link = ( { children, href="#", target="_blank" } ) => {
  return (
    <Li.default href={href}>
      <a target={target} className={styles.link}> {children} </a>
    </Li.default>
  );
}

export default Link;
