import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardProfile from './CardProfile';

const NavUser = (props) => {

  const user = props.user;

  return (

    <>

      <div className="head">
        <CardProfile 
          name={user.first_name + " " + user.last_name} 
          email={user.email}
          img={user.img}
        />
      </div>

      <nav className="nav">
        
        <Link href="/">
          <a className="option"> Hello </a>
        </Link>

        <Link href="/works">
          <a className="option"> Work </a>
        </Link>
        
        <Link href="/contact">
          <a className="option"> Contact </a>
        </Link>

      </nav>

      { props.children }
    </>
  )

}

export default NavUser;