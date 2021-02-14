import React from 'react';
import ReactDOM from 'react-dom';

import './CSS/index.css';
import { App } from './Components/App';
import { NavigationProvider } from './Context/navigation_context';

ReactDOM.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>,
  document.getElementById('root')
);
