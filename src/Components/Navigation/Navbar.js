import React from 'react';
import { Link } from 'react-router-dom';

import { Sidebar } from '../Navigation';
import { useNavigationContext } from '../../Context/navigation_context';

const Navbar = () => {
  const {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    color,
  } = useNavigationContext();

  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-center'>
          <div className={color ? 'nav-left' : 'nav-left-light'}>
            <Link to='/'>Tomas Padilla</Link>
          </div>
          <div className={color ? 'nav-right' : 'nav-right-light'}>
            {isSidebarOpen ? (
              <div
                className='burger-menu burger-open'
                onClick={() => closeSidebar()}
              >
                <div className='b-line'></div>
                <div className='b-line'></div>
                <div className='b-line'></div>
              </div>
            ) : (
              <div className='burger-menu' onClick={() => openSidebar()}>
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
