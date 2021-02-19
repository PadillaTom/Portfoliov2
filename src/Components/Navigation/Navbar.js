import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Sidebar } from '../Navigation';
import { useNavigationContext } from '../../Context/navigation_context';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    color,
  } = useNavigationContext();

  // Scrolled Navbar
  const handleScrolled = () => {
    if (window.scrollY >= 350) {
      setIsScrolled(true);
    }
    if (window.scrollY < 350) {
      setIsScrolled(false);
    }
  };
  window.addEventListener('scroll', handleScrolled);
  //

  return (
    <>
      <nav
        className={
          !isScrolled ? `navbar-container` : `navbar-container scrolled`
        }
      >
        <div className='navbar-center'>
          <div className={color ? 'nav-left' : 'nav-left-light'}>
            <Link to='/'>Tomas Padilla</Link>
          </div>
          <div className={color ? 'nav-right' : 'nav-right-light'}>
            {isSidebarOpen ? (
              <div
                className='burger-menu burger-open'
                onClick={() => {
                  closeSidebar();
                  handleScrolled();
                }}
              >
                <div className='b-line'></div>
                <div className='b-line'></div>
                <div className='b-line'></div>
              </div>
            ) : (
              <div
                className='burger-menu'
                onClick={() => {
                  openSidebar();
                  setIsScrolled(false);
                }}
              >
                <div className='b-line'></div>
                <div className='b-line'></div>
                <div className='b-line'></div>
              </div>
            )}
            {/* END CAMBIAR POR SVG EN UN FUTURO */}
          </div>
        </div>
      </nav>
      {isSidebarOpen && <Sidebar></Sidebar>}
    </>
  );
};

export default Navbar;
