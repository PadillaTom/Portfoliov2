import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useNavigationContext } from '../../Context/navigation_context';

// Data:
import { links } from '../../Utils/data';

const Sidebar = () => {
  const { color, closeSidebar } = useNavigationContext();

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await setData(links);
    }
    fetchData();
  }, []);

  return (
    <aside className={color ? 'sidebar' : 'sidebar-light'}>
      <div className='sidebar-container'>
        {/* Links */}
        <div className='side-links'>
          <ul>
            {data.map((item) => {
              const { id, title, url } = item;
              return (
                <Link to={url} key={id} className='single-link'>
                  <li onClick={() => closeSidebar()}>{title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* End Links */}

        {/* Widgets */}
        <div className='side-widgets'>
          {/* Contact Widget */}
          <div className='single-widget'>
            <h3 className='widget-title'>Contact</h3>
            <div>
              <p>
                <a href='mailto:padillatomasagustin@gmail.com'>
                  PadillaTomasAgustin@gmail.com
                </a>
                <br />
                <a href='tel:+41794002693'>+41 79 400 26 93</a>
              </p>
            </div>
          </div>
          {/* Social Widget */}
          <div className='single-widget'>
            <h3 className='widget-title'>Social</h3>
            <div>
              <p>
                <a
                  href='https://github.com/PadillaTom'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
                <br />
                <a
                  href='https://www.linkedin.com/in/padillatom/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          {/* Work Widget */}
          <div className='single-widget'>
            <h3 className='widget-title'>Want to work together?</h3>
            <Link to='/contact' onClick={() => closeSidebar()}>
              Get in touch!
            </Link>
          </div>
        </div>
        {/* End Widgets */}
      </div>
    </aside>
  );
};

export default Sidebar;
