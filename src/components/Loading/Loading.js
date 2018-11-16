import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
  /* eslint no-return-assign: "error" */
  useEffect(() => {
    try {
      document.title = 'Wiktor Płocki - Loading...';
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <div className="masthead text-center d-flex">
      <Container className="my-auto flex-center">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mx-auto">
            <span>
              <h1>
                <FontAwesomeIcon icon={faCircleNotch} spin />
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
