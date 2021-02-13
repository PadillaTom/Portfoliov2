import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { Sidebar } from '../Navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-center'>
          <div className='nav-left'>
            <Link to='/'>Tomas Padilla</Link>
          </div>
          <div className='nav-right' onClick={() => setIsOpen(!isOpen)}>
            {/* CAMBIAR POR SVG EN UN FUTURO */}
            {isOpen ? (
              <AiOutlineClose className='fa-times'></AiOutlineClose>
            ) : (
              <AiOutlineBars className='fa-bars'></AiOutlineBars>
            )}
            {/* END CAMBIAR POR SVG EN UN FUTURO */}
          </div>
        </div>
      </nav>
      {isOpen && <Sidebar></Sidebar>}
    </>
  );
};

export default Navbar;
