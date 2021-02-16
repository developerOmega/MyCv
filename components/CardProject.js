import React, {useState} from 'react';
import IMG from './tags/IMG';
import Btn from './tags/Btn';
import BtnLink from "./tags/BtnLink";
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
    // setTimeout(() => , 500 )
    
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
          More ...
        </BtnLink>
        <Btn type="button" color="danger" onClick={closeOp}>
          Exit
        </Btn>
      </div>
    </div>
  )

}

export default CardProject;