import React from 'react';
import styles from './CardJobShow.module.scss';
import JustContent from './flex/JustContent';
import Close from './icons/Close';
import Screen from "./tags/Screen";
import Btn from './tags/Btn';
import moment from 'moment';

const CardJobShow = ({view = () => {return}, job = {}}) => {

  const flex = {
    display: 'flex',
    alignItems: "flex-start",
    justifyContent: "center",
  }

  const getTime = ( time ) => moment.utc( time ).format('DD-MM-YYYY');

  return (
    <Screen style={flex}>
      
      <div className={styles.card}>
        
        <JustContent type="flex-end">
          <Btn type="button" style="none" onClick={view} >
            <Close width="15px" className={styles.btn} />
          </Btn>
        </JustContent>

        <div className={styles.main}>
          <JustContent type="center">
            <h2 className={styles.head}> { job.company } </h2>
            <p className={styles.head}> { getTime(job.init)} / {getTime(job.finish)} </p>
          </JustContent>

          <JustContent type="center">
            <p className={styles.content}>
              { job.description } 
            </p>
          </JustContent>
        </div>

      </div>
    </Screen>
  );
}

export default CardJobShow;