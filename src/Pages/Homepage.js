import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import heroBg from '../Assets/Images/heroBg.jpg';
import { useNavigationContext } from '../Context/navigation_context';

// Animations:
import { motion } from 'framer-motion';
import { varsHome, transHome } from '../Utils/helpers';

const Homepage = () => {
  const { setColorDark } = useNavigationContext();

  useEffect(() => {
    setColorDark();
  }, []);

  return (
    <>
      <motion.section
        className='home-sect'
        initial='out'
        animate='in'
        exit='out'
        variants={varsHome}
        transition={transHome}
      >
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
      </motion.section>
    </>
  );
};

export default Homepage;
