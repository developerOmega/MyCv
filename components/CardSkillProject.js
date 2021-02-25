import React from 'react';
import styles from './CardSkillProject.module.scss';
import Icon from './tags/Icon';

const CardSkillProjects = ({skills}) => {
  const getSkill = skills.map( skill => <Icon key={skill.id} fill="#fff" width="50px" icon={skill.icon} />  );

  return (
    <div className={styles.card}>  
      {getSkill}
    </div>
  );

}

export default CardSkillProjects;