import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line prefer-arrow-callback
const NotFound = () => {
  /* eslint no-return-assign: "error" */
  useEffect(() => {
    try {
      document.title = `Wiktor Płocki - 404`;
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <main className="masthead text-center d-flex">
      <Container className="my-auto flex-center">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mx-auto">
            <h1 className="text-uppercase">
              <strong>404</strong>
            </h1>
          </Col>
          <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mx-auto">
            <h4 className="mb-5 display-4">
              You ended up in the middle of nowhere
            </h4>
          </Col>
          <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mx-auto">
            <Button className="text-uppercase" tag={Link} to="/">
              Back to the main page
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default NotFound;
