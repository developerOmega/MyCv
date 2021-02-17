import React from 'react';
import styles from './MenuResp.module.scss';

const MenuResp = ({ jobs, skills }) => {

  return (
    <div className={ styles.cards }>
      <div className="card-2">
        <div className={styles.title}>
          Jobs
        </div>
        { jobs }
      </div>

      <div className="card-3">
        <div className={styles.title}>
          Skills
        </div>
        { skills }
      </div>
    </div>
  )

}

export default MenuResp;