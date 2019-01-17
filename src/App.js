import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './stylesheets/main.scss';

import AuthContext from './context/AuthContext';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import NotFound from './components/NotFound/NotFound';

const Home = lazy(() => import('./components/Home/Home'));
const LoginForm = lazy(() => import('./components/LoginForm/LoginForm'));
const Projects = {
  List: lazy(() => import('./components/Projects/ProjectsList/ProjectsList')),
  Detail: lazy(() =>
    import('./components/Projects/ProjectsDetail/ProjectsDetail')
  )
};
const Admin = {
  Dashboard: lazy(() => import('./components/Admin/Dashboard/AdminDashboard'))
};

const App = () => {
  const [token, setToken] = useState(null);
  const [tokenExpiry, setTokenExpiry] = useState(null);

  const login = (passToken, passTokenExpiry) => {
    setToken(passToken);
    setTokenExpiry(passTokenExpiry);
  };

  const logout = () => {
    setToken(null);
    setTokenExpiry(null);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Router>
            <Suspense fallback={<Loading />}>
              <AuthContext.Provider
                value={{ token, tokenExpiry, login, logout }}
              >
                <Header />
                <Switch>
                  <Route exact path="/" render={() => <Home />} />
                  <Route
                    exact
                    path="/projects"
                    render={() => <Projects.List />}
                  />
                  <Route
                    exact
                    path="/projects/:id"
                    render={props => <Projects.Detail {...props} />}
                  />
                  <Route exact path="/login" render={() => <LoginForm />} />
                  {token && (
                    <Route
                      exact
                      path="/admin"
                      render={() => <Admin.Dashboard />}
                    />
                  )}
                  {!token && (
                    <Route exact path="/admin" render={() => <NotFound />} />
                  )}
                  {!token && <Redirect exact from="/logout" to="/" />}
                  {token && <Redirect exact from="/login" to="/" />}
                  <Route exact path="*" render={() => <NotFound />} />
                </Switch>
              </AuthContext.Provider>
            </Suspense>
          </Router>
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
