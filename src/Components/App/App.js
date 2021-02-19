import {
  // BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

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
// Animations:
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <CursorFollower></CursorFollower>
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Homepage></Homepage>
          </Route>
          <Route path='/about'>
            <AboutPage></AboutPage>
          </Route>
          <Route path='/works' exact>
            <WorksPage></WorksPage>
          </Route>

          <Route
            path='/works/:slug'
            children={<WorkDetails></WorkDetails>}
          ></Route>

          <Route path='/contact'>
            <ContactPage></ContactPage>
          </Route>
          <Route path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
