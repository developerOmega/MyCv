import React, { useState } from 'react';
import styles from './CardJobShow.module.scss';
import JustContent from './flex/JustContent';
import Close from './icons/Close';
import { Screen, Btn } from './tags';
import moment from 'moment';

const CardJobShow = ({view = () => {return}, job = {}}) => {

  const [exit, setExit] = useState(false);

  const flex = {
    display: 'flex',
    alignItems: "flex-start",
    justifyContent: "center",
  }
  
  let styleCard = styles.card + " ";
  styleCard += exit ? styles.close : styles.open; 

  const exitCard = () => {
    setExit(true);
    setTimeout(() => view(),  450);
  };
  
  const getTime = ( time ) => moment.utc( time ).format('DD-MM-YYYY');

  return (
    <Screen style={flex}>
      
      <div className={styleCard}>
        
        <JustContent type="flex-end">
          <Btn type="button" style="none" onClick={exitCard} >
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