import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components:
// Pages:
import { ErrorPage, Homepage } from '../../Pages';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Homepage></Homepage>
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
