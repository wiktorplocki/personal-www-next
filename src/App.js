import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/main.scss';

import Header from './components/Header/Header';

const Home = lazy(() => import('./components/Home/Home'));
const App = () => (
  <Container fluid>
    <Row>
      <Col>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Suspense>
        </Router>
      </Col>
    </Row>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
