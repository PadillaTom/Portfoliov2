import React, { useEffect } from 'react';

import { useNavigationContext } from '../Context/navigation_context';

const ErrorPage = () => {
  const { setColorDark } = useNavigationContext();
  useEffect(() => {
    setColorDark();
  }, []);
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default ErrorPage;
