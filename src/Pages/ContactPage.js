import React, { useEffect } from 'react';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useNavigationContext } from '../Context/navigation_context';
import contactImg from '../Assets/Images/contactImg.jpg';

// Animations:
import { motion } from 'framer-motion';
import { pageTrans, pageVars } from '../Utils/helpers';

const ContactPage = () => {
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();
  }, []);

  return (
    <motion.section
      className='section contact-sect'
      initial='out'
      animate='in'
      exit='out'
      variants={pageVars}
      transition={pageTrans}
    >
      {/* IMG Mobile */}
      <div className='contact-img-container'>
        <img src={contactImg} alt='Contact Tomas Padilla' />
      </div>

      <div className='contact-data-container'>
        <div className='screen-data-center'>
          <div className='contact-data'>
            <h4>Get in Touch</h4>
            <a href='mailto:padillatomasagustin@gmail.com'>
              PadillaTomasAgustin@gmail.com
            </a>
            <br />
            <a href='tel:+41794002693'>+41 79 400 26 93</a>
          </div>
          <div className='contact-data cont-social'>
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
          </div>
        </div>
      </div>
      <div className='contact-img-container-screens'>
        <img src={contactImg} alt='Contact Tomas Padilla' />
      </div>
      <div className='contact-form-container'>
        <div className='screen-form-center'>
          <h2>Send Message</h2>
          <form>
            <div className='single-control'>
              <label htmlFor='name'>Your Name</label>
              <input type='text' />
            </div>
            <div className='single-control'>
              <label htmlFor='email'>Your E-mail</label>
              <input type='email' />
            </div>
            <div className='single-control'>
              <label htmlFor='message' className='textarea-label'>
                Your Message
              </label>
              <textarea name='message' id='' cols='30' rows='10'></textarea>
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
