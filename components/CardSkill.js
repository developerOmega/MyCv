import React from 'react';

const CardSkill = ( {skill} ) => {

  return (
    <div>
      <div> {skill.icon} </div>
      <div> {skill.name} </div>
    </div>
  )

}

export default CardSkill;