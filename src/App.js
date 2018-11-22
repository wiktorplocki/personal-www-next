import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/main.scss';

import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import NotFound from './components/NotFound/NotFound';

const Home = lazy(() => import('./components/Home/Home'));
const Projects = {
  List: lazy(() => import('./components/Projects/ProjectsList/ProjectsList')),
  Detail: lazy(() =>
    import('./components/Projects/ProjectsDetail/ProjectsDetail')
  )
};
// const ProjectsList = lazy(() =>
//   import('./components/Projects/ProjectsList/ProjectsList')
// );
// const ProjectsDetail = lazy(() =>
//   import('./components/Projects/ProjectsDetail/ProjectsDetail')
// );
const LoginForm = lazy(() => import('./components/LoginForm/LoginForm'));
const Admin = {
  Dashboard: lazy(() => import('./components/Admin/Dashboard/AdminDashboard'))
};

const App = () => (
  <Container fluid>
    <Row>
      <Col>
        <Router>
          <Suspense fallback={<Loading />}>
            <Header />
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/projects" render={() => <Projects.List />} />
              <Route
                exact
                path="/projects/:id"
                render={props => <Projects.Detail {...props} />}
              />
              <Route exact path="/login" render={() => <LoginForm />} />
              <Route exact path="/admin" render={() => <Admin.Dashboard />} />
              <Route exact path="*" render={() => <NotFound />} />
            </Switch>
          </Suspense>
        </Router>
      </Col>
    </Row>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
