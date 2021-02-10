import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { about } from '../Utils/data';
import aboutImg from '../Assets/Images/aboutImg.jpg';

const AboutPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(about);
    console.log(data);
  }, [data]);

  const { subtitle, text, title } = data[0];

  return (
    <>
      <section className='section about-sect'>
        {/* Title */}
        <div className='section-center'>
          <h6>{title}</h6>
          <h2>{subtitle}</h2>
        </div>
        {/* Image */}
        <div className='aboutImg-container'>
          <img src={aboutImg} alt='About Tomas Padilla' />
        </div>
        {/* Text */}
        <div className='division-line'></div>
        <div className='about-text'>
          {text}
          <Link to='/works' className='aboutCTA'>
            Previous Works
          </Link>
          .
        </div>
      </section>
    </>
  );
};

export default AboutPage;
