import React from 'react';
import IMG from './tags/IMG';
import Btn from './tags/Btn';
import BtnLink from "./tags/BtnLink";
import styles from "./CardProject.module.scss";

const CardProject = ( {project} ) => {

  return (
    <div className={`${styles.grid} ${styles.card}`}>
      <div className={styles.mainContent}> 
        <div className={styles.title}>
          {project.title}
        </div>
        
        <div className={styles.desc + " " + styles.none} >
          {project.description}
        </div>

      </div>
      <div className={styles.imgContent}>
        <IMG img={project.img} height="auto" width="128px" />
      </div>
      <div className={ styles.none}>
        <BtnLink href={`/projects/${project.id}`} >
          More ...
        </BtnLink>
        <Btn type="button" color="danger">
          Exit
        </Btn>
      </div>
    </div>
  )

}

export default CardProject;