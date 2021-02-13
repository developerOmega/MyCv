import React from 'react';
import styles from './CardProfile.module.scss';
import IMG from './IMG';

const CardProfile = ( {img, name, email} ) => {
  return (
    <div className={styles.perfil}>
      <IMG img={img} height="50" />
      <div className="info">
        <div className="main"> { name } </div>
        <div className="second"> { email } </div>
      </div>
    </div>
  )
}

export default CardProfile