import React, { useEffect } from 'react';

import { useNavigationContext } from '../Context/navigation_context';
const WorkDetailsPage = () => {
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();
  }, []);

  return <div>Work Details</div>;
};

export default WorkDetailsPage;
