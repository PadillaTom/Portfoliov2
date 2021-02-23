import React, { useEffect } from 'react';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useNavigationContext } from '../Context/navigation_context';
import contactImg from '../Assets/Images/contactImg.jpg';

// Animations:
import { motion } from 'framer-motion';
import {
  pageTrans,
  pageVars,
  varsContImg,
  varsContStag,
} from '../Utils/helpers';

const ContactPage = () => {
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();
  }, []);

  // Handle Focus
  const handleFocus = (e) => {
    e.currentTarget.classList.add('isClicked');
  };
  const handleFocus2 = (e) => {
    e.currentTarget.classList.add('isClicked2');
  };

  return (
    <motion.section
      className='section contact-sect'
      initial='out'
      animate='in'
      exit='out'
      variants={pageVars}
      transition={pageTrans}
      key='Contact'
    >
      {/* IMG Mobile */}
      <div className='contact-img-container'>
        <motion.img
          initial='from'
          animate='to'
          variants={varsContImg}
          transition={{ duration: 1, ease: 'easeIn' }}
          key='contactimgmobile'
          src={contactImg}
          alt='Contact Tomas Padilla'
        />
      </div>

      <div className='contact-data-container'>
        <div className='screen-data-center'>
          <motion.div
            initial='from'
            animate='to'
            variants={varsContStag}
            transition={{
              duration: 0.5,
              ease: 'easeIn',
            }}
            key='contdata1'
            className='contact-data'
          >
            <h4>Get in Touch</h4>
            <a href='mailto:padillatomasagustin@gmail.com'>
              PadillaTomasAgustin@gmail.com
            </a>
            <br />
            <a href='tel:+41794002693'>+41 79 400 26 93</a>
          </motion.div>
          <motion.div
            initial='from'
            animate='to'
            variants={varsContStag}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: 'easeIn',
            }}
            key='contdata2'
            className='contact-data cont-social'
          >
            <h4>Social Media</h4>
            <a
              href='https://github.com/PadillaTom'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillGithub></AiFillGithub>
            </a>
            <a
              href='https://www.linkedin.com/in/padillatom/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillLinkedin></AiFillLinkedin>
            </a>
          </motion.div>
        </div>
      </div>

      {/* IMG Desktop */}
      <div className='contact-img-container-screens'>
        <motion.img
          initial='from'
          animate='to'
          variants={varsContImg}
          transition={{ duration: 2, ease: 'easeIn' }}
          key='contactimg'
          src={contactImg}
          alt='Contact Tomas Padilla'
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: 'easeIn',
          delay: 0.7,
        }}
        key='contform'
        className='contact-form-container'
      >
        <div className='screen-form-center'>
          <h2>Send Message</h2>
          <form action='https://formspree.io/f/mleokyzn' method='POST'>
            <div className='single-control' onClick={(e) => handleFocus(e)}>
              <label htmlFor='name'>Your Name</label>
              <input type='text' name='Name' />
            </div>
            <div className='single-control' onClick={(e) => handleFocus(e)}>
              <label htmlFor='email'>Your E-mail</label>
              <input type='email' name='Email' />
            </div>
            <div className='single-control' onClick={(e) => handleFocus2(e)}>
              <label htmlFor='message' className='textarea-label'>
                Your Message
              </label>
              <textarea name='message' cols='30' rows='10'></textarea>
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
