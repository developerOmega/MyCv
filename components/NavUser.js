import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavUser = (props) => {

  const user = props.user;

  return (
    <>
      <nav className="nav">
        <div className="perfil">
          <Image src={user.img}  height="auto" width="128px" /> 
          <div className="info">
            <div className="main"> { user.first_name } { user.last_name } </div>
            <div className="second"> { user.email } </div>
          </div>
        </div>

        <div className="options">
          <Link href="/">
            <a className="option"> Hello </a>
          </Link>

          <Link href="/works">
            <a className="option"> Work </a>
          </Link>

          <Link href="/contact">
            <a className="option"> Contact </a>
          </Link>
        </div>

      </nav>

      { props.children }
    </>
  )

}

export default NavUser;