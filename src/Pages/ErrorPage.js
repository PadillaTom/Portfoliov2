import React, { useEffect } from 'react';

import { useNavigationContext } from '../Context/navigation_context';

// Animations:
import { motion } from 'framer-motion';
import { pageTrans, pageVars } from '../Utils/helpers';

const ErrorPage = () => {
  const { setColorDark } = useNavigationContext();
  useEffect(() => {
    setColorDark();
  }, []);
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageVars}
      transition={pageTrans}
    >
      <h1>404</h1>
    </motion.div>
  );
};

export default ErrorPage;
