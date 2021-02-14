import React from 'react';
import ButtonLink from './ButtonLink';

const CardJob = ( {job} ) => {

  return (
    <ButtonLink>
      <div> {job.company} </div>
    </ButtonLink>
  )

}

export default CardJob;