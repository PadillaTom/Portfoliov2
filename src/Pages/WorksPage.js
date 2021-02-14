import React, { useEffect } from 'react';

import { useNavigationContext } from '../Context/navigation_context';

const WorksPage = () => {
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();
  }, []);

  return <div>Works Page</div>;
};

export default WorksPage;
