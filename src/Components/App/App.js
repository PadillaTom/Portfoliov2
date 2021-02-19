import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components:
import { CursorFollower } from '../CursorFollower';
import { Navbar, ScrollToTop } from '../Navigation';
// Pages:
import {
  ErrorPage,
  Homepage,
  AboutPage,
  WorksPage,
  ContactPage,
  WorkDetails,
} from '../../Pages';

function App() {
  return (
    <>
      <CursorFollower></CursorFollower>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact>
            <Homepage></Homepage>
          </Route>
          <Route path='/about'>
            <AboutPage></AboutPage>
          </Route>
          <Route path='/works' exact>
            <WorksPage></WorksPage>
          </Route>
          {/* Work Details */}
          <Route
            path='/works/:slug'
            children={<WorkDetails></WorkDetails>}
          ></Route>
          {/* End Work Details */}
          <Route path='/contact'>
            <ContactPage></ContactPage>
          </Route>
          <Route path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
