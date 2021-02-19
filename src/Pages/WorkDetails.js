import React from 'react';
import { useParams } from 'react-router-dom';

import { workDetails } from '../Utils/data';

// Animations:
import { motion } from 'framer-motion';
import { pageTrans, pageVars } from '../Utils/helpers';

const WorkDetails = () => {
  // Find Work
  const { slug } = useParams();
  const myWork = workDetails.find((work) => work.slug === slug);
  const {
    title,
    workImg,
    client,
    location,
    launch,
    live,
    code,
    desc,
    stack,
    nextWork,
    nextWorkUrl,
    nextWorkImg,
    id,
  } = myWork;

  // Routing to Next Work

  return (
    <>
      <motion.div
        className='section wd-sect'
        initial='out'
        animate='in'
        exit='out'
        variants={pageVars}
        transition={pageTrans}
        key={id}
      >
        {/* Title */}
        <div className='wd-title'>
          <h2>{title}</h2>
          <div className='wd-underline'></div>
        </div>
        {/* Image */}
        <div className='wd-img-container'>
          <img src={workImg} alt='Tomas Padilla Kampai Boutique' />
        </div>
        {/* Specs */}
        <div className='wd-specs'>
          <div className='wd-specs-center'>
            <div className='single-spec'>
              <h4>Client</h4>
              <p>{client}</p>
            </div>
            <div className='single-spec'>
              <h4>Location</h4>
              <p>{location}</p>
            </div>
            <div className='single-spec'>
              <h4>Launch</h4>
              <p>{launch}</p>
            </div>
            <div className='single-spec'>
              <h4>Website</h4>
              <a href={live} target='_blank' rel='noreferrer'>
                View Live
              </a>
              <br />
              {code != null && (
                <a href={code} target='_blank' rel='noreferrer'>
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
        {/* Desc */}
        <div className='wd-desc'>
          <div className='wd-division'></div>
          <h2>About</h2>
          <p>{desc}</p>
          <br />
          <span>{stack}</span>
        </div>
        {/* Next Project  */}
        <div className='wd-nextWork'>
          <div className='wd-nextWork-text'>
            <p>Next Work</p>
            <span>{nextWork}</span>
          </div>
        </div>
        <div className='nextWork-empty'>
          <img src={nextWorkImg} alt='Next Project' />
        </div>
      </motion.div>
    </>
  );
};

export default WorkDetails;
