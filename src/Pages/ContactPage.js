import React, { useEffect } from 'react';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useNavigationContext } from '../Context/navigation_context';
import contactImg from '../Assets/Images/contactImg.jpg';

const ContactPage = () => {
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();
  }, []);

  return (
    <section className='section contact-sect'>
      <div className='contact-img-container'>
        <img src={contactImg} alt='Contact Tomas Padilla' />
      </div>
      <div className='contact-data-container'>
        <div className='contact-data'>
          <h2>Get in Touch!</h2>
          <a href='mailto:padillatomasagustin@gmail.com'>
            padillatomasagustin@gmail.com
          </a>
          <a href='tel:+41794002693'>+41 79 400 26 93</a>
        </div>
        <div className='contact-social'>
          <h2>Social Media</h2>
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
      <div className='contact-form-container'>
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
            <label htmlFor='message'>Your Message</label>
            <textarea name='message' id='' cols='30' rows='10'></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
