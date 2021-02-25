import React, {useState} from 'react';
import { Btn, BtnLink, IMG } from './tags';
import styles from "./CardProject.module.scss";

const CardProject = ( {project} ) => {

  const [active, setActive] = useState(false);

  const styleContainer = active ? styles.gridOptions + " " + styles.card : styles.grid + " " + styles.card;
  const styleButtons = active ? styles.buttonContent : styles.none;
  const styleDesc = active ? styles.desc : styles.none;

  const openOp = () =>{ 
    if(active){
      return;
    }
    setActive(true)
  };

  const closeOp = () => {
    setActive(false)
  };

  return (
    <div className={styleContainer} onClick={openOp}>
      <div className={styles.mainContent}> 
        <div className={styles.title}>
          {project.title}
        </div>
        
        <div className={styleDesc} >
          {project.description}
        </div>

      </div>
      <div className={styles.imgContent}>
        <IMG img={project.img} height="auto" width="128px" />
      </div>
      <div className={ styleButtons }>
        <BtnLink href={`/projects/${project.id}`} >
          Ver más ...
        </BtnLink>
        <Btn type="button" color="danger" onClick={closeOp}>
          Salir
        </Btn>
      </div>
    </div>
  )

}

export default CardProject;