import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar-container'>
      <div className='navbar-center'>
        <div className='nav-left'>
          <Link to='/'>Tomas Padilla</Link>
        </div>
        <div
          className={isOpen ? 'nav-right show-close' : 'nav-right'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='burger-line'></div>
          <div className='burger-line'></div>
          <div className='burger-line'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
