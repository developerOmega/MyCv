import React from 'react';
import styles from './CardSkillProject.module.scss';
import Icon from './tags/Icon';
import Btn from './tags/Btn';
import Right from './icons/Right';
import Left from './icons/Left';

const CardSkillProjects = ({skills}) => {
  const getSkill = skills.map( skill => <Icon key={skill.id} fill="#fff" width="50px" icon={skill.icon} />  );

  return (
    <div className={styles.card}>
      <Btn type="button" style="none">
        <Left width="40px" />
      </Btn>
      
      <div className={styles.content}>
        {getSkill}
      </div>
      
      <Btn type="button" style="none">
        <Right width="40px" />
      </Btn>
    </div>
  );

}

export default CardSkillProjects;