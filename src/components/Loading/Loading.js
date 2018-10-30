import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Loading = () => {
  /* eslint no-return-assign: "error" */
  useEffect(() => (document.title = `Wiktor Płocki - Loading...`));
  return (
    <div className="masthead text-center d-flex">
      <Container className="my-auto flex-center">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mx-auto">
            <span>
              <h1>
                <i className="fas fa-circle-notch fa-spin" />
                <strong> Loading...</strong>
              </h1>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Loading;
