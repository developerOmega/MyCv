import React from "react";

const Icon = ( {isSvg = true, icon = '', fill="#000000"} ) => {
  return isSvg ? (
    <svg fill={fill} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
      <path d={icon}/>
    </svg>
  ) : (
    <i style={{color: fill}} className={icon}></i>
  )
}

export default Icon;