import React from 'react';
import styles from './Btn.module.scss';

const Btn = ( {children ,type="submit", color="main", style="button", onClick= () => {return}} ) => {

  const styleColor = color == 'main' ?  styles.button + " " + styles.main : styles.button + " " + styles.danger;
  let styleContent = styleColor;

  switch( style ) {
    case "none":
      styleContent = styles.difuminated;
      break;
    case "menu":
      styleContent += " " + styles.menu;
    default:
      styleContent = styleContent;
  }

  return (
    <button type={type} className={styleContent} onClick={onClick}>
      {children}
    </button>
  )
}

export default Btn;