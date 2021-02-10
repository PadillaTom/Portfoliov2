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
      <section className='section home-sect'>
        <h1>Tomas Padilla</h1>
        <Link to='/'>Hello</Link>
      </section>
    </>
  );
};

export default Homepage;
