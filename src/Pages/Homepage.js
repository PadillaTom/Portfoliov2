import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { homepage } from '../Utils/data';
import heroBg from '../Assets/Images/heroBg.jpg';

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(homepage);
    console.log(data);
  }, [data]);

  return (
    <>
      <section className='section home-sect'>
        <h1>Hello</h1>
      </section>
    </>
  );
};

export default Homepage;
