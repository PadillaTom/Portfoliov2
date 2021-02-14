import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { Sidebar } from '../Navigation';
import { useNavigationContext } from '../../Context/navigation_context';

const Navbar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useNavigationContext();

  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-center'>
          <div className='nav-left'>
            <Link to='/'>Tomas Padilla</Link>
          </div>
          <div className='nav-right'>
            {/* CAMBIAR POR SVG EN UN FUTURO */}
            {isSidebarOpen ? (
              <AiOutlineClose
                className='fa-times'
                onClick={() => closeSidebar()}
              ></AiOutlineClose>
            ) : (
              <AiOutlineBars
                className='fa-bars'
                onClick={() => openSidebar()}
              ></AiOutlineBars>
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
