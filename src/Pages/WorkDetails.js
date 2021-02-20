import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { workDetails } from '../Utils/data';

// Animations:
import { motion } from 'framer-motion';
import { pageTrans, pageVars, wdImage, wdTitle } from '../Utils/helpers';

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
  const history = useHistory();
  return (
    <>
      <motion.div
        className='section wd-sect'
        initial='initial'
        animate='animate'
        key={id}
      >
        {/* Title */}
        <motion.div
          initial='from'
          animate='to'
          variants={wdTitle}
          transition={{ delay: 0.5, duration: 1.5, ease: 'easeIn' }}
          key='WDTitle'
          className='wd-title'
        >
          <h2>{title}</h2>
          <div className='wd-underline'></div>
        </motion.div>
        {/* Image */}
        <motion.div
          initial='from'
          animate='to'
          variants={wdImage}
          transition={{
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
            delay: 0.3,
          }}
          key='WDImg'
          className='wd-img-container'
        >
          <img src={workImg} alt='Tomas Padilla Kampai Boutique' />
        </motion.div>
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
        <motion.div
          exit={{ scale: 1.1 }}
          transition={{ duration: 1 }}
          onMouseOver={() => history.push(nextWorkUrl)}
          className='nextWork-empty'
        >
          <img src={nextWorkImg} alt='Next Project' />
        </motion.div>
      </motion.div>
    </>
  );
};

export default WorkDetails;
