import React from 'react';

const Gap = ( {children, p="20px"} ) => {

  const style = {
    display: "grid",
    gap: p
  }

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Gap;