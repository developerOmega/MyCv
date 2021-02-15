import React from 'react';
import TextFlex from './flex/TextFlex';
import Badge from './tags/Badge';
import Icon from './tags/Icon';

const CardSkill = ( {skill} ) => {

  return (
    <Badge>
      <TextFlex>
        <Icon fill="#fff" icon={skill.icon} />
        <div> {skill.name} </div>
      </TextFlex>
    </Badge>
  )

}

export default CardSkill;