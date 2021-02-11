import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-center'>
        <div className='nav-left'>
          <Link to='/'>Tomas Padilla</Link>
        </div>
        <div className='nav-right'>
          <div className='burger-line'></div>
          <div className='burger-line'></div>
          <div className='burger-line'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
