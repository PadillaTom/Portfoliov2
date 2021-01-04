import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import { Homepage, ContactPage, ServicesPage, AboutPage } from './Pages';
// Components:
import { Navbar } from './Components';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact>
          <Homepage></Homepage>
        </Route>
        <Route path='/nosotros' exact>
          <AboutPage></AboutPage>
        </Route>
        <Route path='/servicios' exact>
          <ServicesPage></ServicesPage>
        </Route>
        <Route path='/contacto' exact>
          <ContactPage></ContactPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
