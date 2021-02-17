import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
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
            {/* CAMBIAR POR SVG EN UN FUTURO */}
            {isSidebarOpen ? (
              // <AiOutlineClose
              //   className='fa-times'
              //   onClick={() => closeSidebar()}
              // ></AiOutlineClose>
              <div
                className='burger-menu burger-open'
                onClick={() => closeSidebar()}
              >
                <div className='b-line'></div>
                <div className='b-line'></div>
                <div className='b-line'></div>
              </div>
            ) : (
              // <AiOutlineBars
              //   className='fa-bars'
              //   onClick={() => openSidebar()}
              // ></AiOutlineBars>
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
