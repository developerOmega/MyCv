import React from 'react';
import IMG from '../components/tags/IMG';

const MainLayout = ( {children, user, project} ) => {
  return (
    <div className="init">

      <header className="header">
        <div className="logo">
          MyCv
        </div>
      </header>

      <div className="container">
        <div className="slider">
          <div className="img">
            <IMG img={ user ? user.main_img : project.img} height="50" />
          </div>
        </div>

        <section className="content">
          { children }
        </section>
      </div>

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