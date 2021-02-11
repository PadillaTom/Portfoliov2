import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { homepage } from '../Utils/data';

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(homepage);
  }, [data]);

  return (
    <>
      <section className='home-sect'>
        <div className='homepage-container'>
          <h6>Tomas Padilla</h6>
          <h1>Web Developer</h1>
          <Link to='/works'>
            <button type='button' className='homeCTA'>
              Works
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Homepage;
