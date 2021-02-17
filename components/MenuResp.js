import React from 'react';
import styles from './MenuResp.module.scss';
import Close from './icons/Close';
import JustContent from './flex/JustContent';
import Btn from './tags/Btn'; 

const MenuResp = ({ jobs, skills, className="", func= () => {return} }) => {

  const exitMenu = () => func();

  return (
    <div className={ styles.cards + " " + className }>
      <JustContent type="flex-end">
        <Btn type="button" style="none" onClick={exitMenu} >
          <Close width="15px" className={styles.btn} />
        </Btn>
      </JustContent>

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