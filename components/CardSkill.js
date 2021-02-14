import React from 'react';
import ButtonLink from './tags/ButtonLink';

const CardSkill = ( {skill} ) => {

  return (
    <ButtonLink>
      <div> {skill.icon} </div>
      <div> {skill.name} </div>
    </ButtonLink>
  )

}

export default CardSkill;