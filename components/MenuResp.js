import React, {useState} from 'react';
import styles from './MenuResp.module.scss';
import Close from './icons/Close';
import JustContent from './flex/JustContent';
import Btn from './tags/Btn'; 

const MenuResp = ({ jobs, skills, className="", func= () => {return} }) => {

  const [exit, setExit] = useState(false);

  let style = styles.cards + " ";
  style += exit ? styles.close : styles.open;

  const exitMenu = () => {
    setExit(true);
    setTimeout( () => func(), 600 );
  };

  return (
    <div className={ style + " " + className }>
      <JustContent type="flex-end">
        <Btn type="button" style="none" onClick={exitMenu} >
          <Close width="15px" className={styles.btn} />
        </Btn>
      </JustContent>

      <div>
        <div className={styles.title}>
          Experiencia
        </div>
        { jobs }
      </div>

      <div>
        <div className={styles.title}>
          Habilidades
        </div>
        { skills }
      </div>
    </div>
  )
}

export default MenuResp;