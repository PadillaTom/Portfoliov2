import React, { useEffect } from 'react';

import { useNavigationContext } from '../Context/navigation_context';

const ContactPage = () => {
  const { setColorLight } = useNavigationContext();
  useEffect(() => {
    setColorLight();
  }, []);

  return <div>Contact Page</div>;
};

export default ContactPage;
