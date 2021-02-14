import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components:
// import { WelcomeScreen } from '../WelcomeScreen';
import { CursorFollower } from '../CursorFollower';
import { Navbar, Footer, ScrollToTop } from '../Navigation';

// Pages:
import {
  ErrorPage,
  Homepage,
  AboutPage,
  WorksPage,
  WorkDetailsPage,
  ContactPage,
} from '../../Pages';

function App() {
  return (
    <>
      {/* <WelcomeScreen></WelcomeScreen> */}
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
          <Route path='/works'>
            <WorksPage></WorksPage>
          </Route>
          <Route path='/works/:id'>
            <WorkDetailsPage></WorkDetailsPage>
          </Route>
          <Route path='/contact'>
            <ContactPage></ContactPage>
          </Route>
          <Route path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
