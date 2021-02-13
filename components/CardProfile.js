import React from 'react';
import styles from './CardProfile.module.scss';
import IMG from './IMG';

const CardProfile = ( {img, name, email} ) => {
  return (
    <div className={styles.perfil}>
      <IMG img={img} width="100%" height="100%" />
      <div className="info">
        <div className={styles.main}> { name } </div>
        <div className={styles.second}> { email } </div>
      </div>
    </div>
  )
}

export default CardProfile