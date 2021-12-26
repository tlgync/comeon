import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { HomePage } from './views/HomePage';
import { Login } from './views/Login/Login';
import { Play } from './views/Play';

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    isAuth ? (
      <Router>
        <Switch>
          <Route exact path="/login" component={withRouter(Login)} />
          <Route exact path="/" component={withRouter(HomePage)} />
          <Route exact path="/play/:game" component={withRouter(Play)} />
        </Switch>
      </Router>
    ) : <Login />

  );
}

export default App;
