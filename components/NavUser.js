import React, {useEffect} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import CardProfile from './CardProfile';
import { setCookie, getCookie } from '../config/cookie';

const NavUser = (props) => {

  const user = props.user;

  const setScroller = (e) => {
    e.preventDefault();
    setCookie( "clientY", window.scrollY );
    Router.push(e.target.href);
  }
  
  useEffect(() => {

    const executeEnv = (execute = true) => {
      if(execute) {
        window.history.pushState('', document.title, window.location.pathname);
        window.scroll({top: getCookie('clientY')});
      }
    }
    executeEnv();

    return () => {
      executeEnv(false);
    }
    
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
        
        <Link href="/">
          <a className="option" onClick={ setScroller }> Hola </a>
        </Link>

        <Link href="/works">
          <a className="option" onClick={ setScroller }> Trabajo </a>
        </Link>
        
        <Link href="/contact">
          <a className="option" onClick={ setScroller }> Contáctame </a>
        </Link>

      </nav>

      { props.children }
    </>
  )

}

export default NavUser;