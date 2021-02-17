import React, { useEffect } from 'react';

import { useNavigationContext } from '../Context/navigation_context';
import { Footer } from '../Components/Navigation';

const WorksPage = () => {
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();
  }, []);

  return (
    <div>
      My works: Page
      <Footer></Footer>
    </div>
  );
};

export default WorksPage;
