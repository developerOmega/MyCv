import React from 'react';
import Image from 'next/image';

const MainLayout = ( {children, user} ) => {
  return (
    <div className="container">

      <header className="header">
        <div className="logo">
          MyCv
        </div>
      </header>

      <div className="slider">
        <Image src={user.main_img}  layout="responsive" height="100%" width="100%" />
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