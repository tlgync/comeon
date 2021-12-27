import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { AuthContext } from './context';
import { HomePage, Login, Play } from './views';

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    isAuth ? (
      <Router>
        <Switch>
          <Route exact path="/" component={withRouter(HomePage)} />
          <Route exact path="/play/:game" component={withRouter(Play)} />
        </Switch>
      </Router>
    ) : <Login />

  );
}

export default App;
