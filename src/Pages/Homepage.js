import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import heroBg from '../Assets/Images/heroBg.jpg';
import { useNavigationContext } from '../Context/navigation_context';

const Homepage = () => {
  const { setColorDark } = useNavigationContext();

  useEffect(() => {
    setColorDark();
  }, []);

  return (
    <>
      <section className='home-sect'>
        <div className='home-bg'>
          <img src={heroBg} alt='Tomas Padilla Homepage' />
          <div className='home-bg-overlay'></div>
          <div className='home-bg-circle'></div>
        </div>
        <div className='homepage-container'>
          <h6>Tomas Padilla</h6>
          <h2>Web Developer</h2>
        </div>
        <Link to='/works' className='homeCTA'>
          <button type='button'>Works</button>
        </Link>
      </section>
    </>
  );
};

export default Homepage;
