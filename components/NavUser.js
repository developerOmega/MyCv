import React, {useEffect} from 'react';
import Link from 'next/link';
import CardProfile from './CardProfile';

const NavUser = (props) => {

  const user = props.user;
  
  useEffect(() => {
    window.history.pushState('', document.title, window.location.pathname);
  }, []);

  return (


    <>

      <div id="n" className="head">
        <CardProfile 
          name={user.first_name + " " + user.last_name} 
          email={user.email}
          img={user.img}
        />
      </div>

      <nav className="nav">
        
        <Link href="/#n">
          <a className="option"> Hola </a>
        </Link>

        <Link href="/works#n">
          <a className="option"> Trabajo </a>
        </Link>
        
        <Link href="/contact#n">
          <a className="option"> Contáctame </a>
        </Link>

      </nav>

      { props.children }
    </>
  )

}

export default NavUser;