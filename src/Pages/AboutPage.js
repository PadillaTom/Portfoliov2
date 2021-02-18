import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import aboutImg from '../Assets/Images/aboutImg.jpg';
import { useNavigationContext } from '../Context/navigation_context';
import { Reviews } from '../Components/Reviews';
import { Footer } from '../Components/Navigation';

const AboutPage = () => {
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();
  }, []);

  return (
    <>
      <section className='section about-sect'>
        {/* Title */}
        <div className='about-title'>
          <h6>About Me</h6>
          <h2>Tomas Padilla</h2>
        </div>
        {/* Image */}
        <div className='aboutImg-container'>
          <img src={aboutImg} alt='About Tomas Padilla' />
        </div>

        {/* WideScreen */}
        <div className='about-widescreen-container'>
          {/* Title */}
          <div className='about-title-w'>
            <div className='aboutscreens-title'>
              <h6>About Me</h6>
              <h2>Tomas Padilla</h2>
            </div>
            <div className='about-scroll-down'>Scroll Down</div>
          </div>
          {/* Image */}
          <div className='aboutImg-container-w'>
            <div className='about-img-center'>
              <img src={aboutImg} alt='About Tomas Padilla' />
            </div>
          </div>
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
          <br />
          <br />I invite you to see my{' '}
          <Link to='/works' className='aboutCTA'>
            Previous Works
          </Link>
          .
        </div>
        <Reviews></Reviews>
        <Footer></Footer>
      </section>
    </>
  );
};

export default AboutPage;
