import React from 'react';
import Badge from './tags/Badge';

const CardJob = ( {job} ) => {

  return (
    <Badge>
      <div> {job.company} </div>
    </Badge>
  )

}

export default CardJob;