import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaAngleDoubleDown} from "react-icons/fa";

import aboutImg from '../Assets/Images/aboutImg.jpg';
import { useNavigationContext } from '../Context/navigation_context';
// import { Reviews } from '../Components/Reviews';
import { Footer } from '../Components/Navigation';

// Animations:
import { motion } from 'framer-motion';
import {
  pageVars,
  pageTrans,
  varsAboutImgBg,
  varsContImg,
} from '../Utils/helpers';

const AboutPage = () => {
  // Context
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();    
  }, []);

  return (
    <>
      <motion.section
        initial='out'
        animate='in'
        exit='out'
        key='About'
        variants={pageVars}
        transition={pageTrans}
        className='section about-sect'
      >
        {/* Title */}
        <div className='about-title'>
          <h6>About Me</h6>
          <h2>Tomas Padilla</h2>
        </div>
        {/* Image */}
        <div className='aboutImg-container'>
          <motion.img
            initial='from'
            animate='to'
            variants={varsContImg}
            transition={{ duration: 0.7, ease: 'easeIn' }}
            key='caboutimgmobile'
            src={aboutImg}
            alt='About Tomas Padilla'
          />
        </div>

        {/* WideScreen */}
        <div className='about-widescreen-container'>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4, ease: 'easeIn' }}
            key='aboutTitle'
            className='about-title-w'
          >
            <div className='aboutscreens-title'>
              <h6>About Me</h6>
              <h2>Tomas Padilla</h2>
            </div>
            <div className='about-scroll-down'>
              <FaAngleDoubleDown></FaAngleDoubleDown>
            </div>
          </motion.div>
          {/* Image */}
          <motion.div
            initial='from'
            animate='to'
            variants={varsAboutImgBg}
            transition={{ ease: 'easeIn', duration: 0.6 }}
            key='AboutimgContainer'
            className='aboutImg-container-w'
          >
            <div className='about-img-center'>
              <motion.img
                initial={{ opacity: 0, y: '2rem' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: 'easeIn' }}
                key='aboutImgDelayed'
                src={aboutImg}
                alt='About Tomas Padilla'
              />
            </div>
          </motion.div>
        </div>
        {/* End Widescreen */}

        {/* Text */}
        <div className='division-line'></div>
        <div className='about-text'>
          With an artistic background, I have started my studies as a Web
          Developer to find a real passion.
          <br />
          <br />
          <span>Tools & Technologies:</span>
          <br />
          HTML, CSS, Javascript, jQuery, React, Gatsby, NextJS. SASS, Material
          UI, Styled Components, GSAP, Framer Motion.
          <br/>
          <span>Currently working on: </span>
          <br/>
          Java, Spring Boot, MySQL, MongoDB.
          <br />
          <br />I invite you to see my {" "}
          <Link to='/works' className='aboutCTA'>
            Previous Works
          </Link>
          .
        </div>
        {/* <Reviews></Reviews> */}
        <Footer></Footer>
      </motion.section>
    </>
  );
};

export default AboutPage;
