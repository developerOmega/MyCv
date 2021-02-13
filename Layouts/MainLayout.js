import React from 'react';
import IMG from '../components/IMG';

const MainLayout = ( {children, user} ) => {
  return (
    <div className="container">

      <header className="header">
        <div className="logo">
          MyCv
        </div>
      </header>

      <div className="slider">
        <div className="img">
          <IMG img={user.main_img} height="50" />
        </div>
      </div>

      <section className="content">
        { children }
      </section>

      <footer className="footer">
        <div className="logo">
          MyCv
        </div>

        <div className="info">
          <div className="primary"> by Daniel Mendoza </div>
          <div className="second"> in www.developeromega.com.mx </div>
        </div>
      </footer>

    </div>
  )
}

export default MainLayout;