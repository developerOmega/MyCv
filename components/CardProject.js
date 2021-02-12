import React from 'react';
import Image from 'next/image';

const CardProject = ( {project} ) => {

  return (
    <div>
      <div> {project.title} </div>
      <Image src={project.img} height="auto" width="128px" />
    </div>
  )

}

export default CardProject;