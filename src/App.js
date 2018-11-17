import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/main.scss';

import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import NotFound from './components/NotFound/NotFound';

const Home = lazy(() => import('./components/Home/Home'));
const ProjectsList = lazy(() =>
  import('./components/Projects/ProjectsList/ProjectsList')
);
const ProjectsDetail = lazy(() =>
  import('./components/Projects/ProjectsDetail/ProjectsDetail')
);

const App = () => (
  <Container fluid>
    <Row>
      <Col>
        <Router>
          <Suspense fallback={<Loading />}>
            <Header />
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route
                exact
                path="/projects"
                component={() => <ProjectsList />}
              />
              <Route
                exact
                path="/projects/:id"
                render={props => <ProjectsDetail {...props} />}
              />
              <Route exact path="*" component={() => <NotFound />} />
            </Switch>
          </Suspense>
        </Router>
      </Col>
    </Row>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
