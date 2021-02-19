import React from 'react';
import ReactDOM from 'react-dom';

import './CSS/index.css';
import { App } from './Components/App';
import { NavigationProvider } from './Context/navigation_context';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </Router>,
  document.getElementById('root')
);
