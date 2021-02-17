import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { links } from '../../Utils/data';

const Footer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await setData(links);
    }
    fetchData();
  }, []);

  return (
    <footer className=' section footer-sect'>
      {/* Header */}
      <div className='footer-header'>
        <div className='footer-cta'>
          <h2>Want to work with me?</h2>
          <Link to='/contact'>
            <button type='button'>Get in Touch</button>
          </Link>
        </div>
        {/* Sitemap */}
        <div className='footer-sitemap'>
          <div className='sitemap-title'>Sitemap</div>
          <div className='sitemap-list'>
            <ul>
              {data.map((item) => {
                const { id, title, url } = item;
                return (
                  <Link to={url} key={id} className='footer-link'>
                    <li>{title}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Division */}
      <div className='footer-division'></div>
      {/* Copy */}
      <div className='footer-copy'>
        <h2>Tomas Padilla</h2>
        <div className='copy-social'>
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
        <div className='copy'>&copy; 2021 Tomas Padilla.</div>
      </div>
    </footer>
  );
};

export default Footer;
