import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import heroBg from '../Assets/Images/heroBg.jpg';
import { useNavigationContext } from '../Context/navigation_context';

// Animations:
import { motion } from 'framer-motion';
import { varsHome, transHome, varsHomeBg, varsHomeCta } from '../Utils/helpers';

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
          <motion.img
            src={heroBg}
            alt='Tomas Padilla Homepage'
            initial='from'
            animate='to'
            variants={varsHomeBg}
            transition={{ duration: 0.7, ease: 'easeIn' }}
          />
          <div className='home-bg-overlay'></div>
          <div className='home-bg-circle'></div>
        </div>
        <div className='homepage-container'>
          <h6>Tomas Padilla</h6>
          <h2>Web Developer</h2>
        </div>
        <Link to='/works' className='homeCTA'>
          <motion.button
            type='button'
            initial='from'
            animate='to'
            variants={varsHomeCta}
            transition={{ delay: 1, duration: 1, ease: 'easeIn' }}
          >
            Works
          </motion.button>
        </Link>
      </motion.section>
    </>
  );
};

export default Homepage;
