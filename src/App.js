import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'reactstrap';

import './stylesheets/main.scss';

const App = () => (
  <Container>
    <h1>Hello World</h1>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
