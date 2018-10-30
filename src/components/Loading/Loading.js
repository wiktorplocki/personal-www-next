import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Loading = () => (
  <div className="masthead text-center d-flex">
    <Container className="my-auto flex-center">
      <Row>
        <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mx-auto">
          <span>
            <h1>
              <strong>Loading...</strong>
            </h1>
          </span>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Loading;
