import React, { useEffect } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line prefer-arrow-callback
const Home = () => {
  /* eslint no-return-assign: "error" */
  useEffect(() => {
    try {
      document.title = `Wiktor Płocki`;
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <main className="masthead text-center d-flex" id="masthead">
      <Container className="my-auto flex-center">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mx-auto">
            <h1 className="text-uppercase">
              <strong>Wiktor Płocki</strong>
            </h1>
          </Col>
          <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mx-auto">
            <h4 className="mb-5 display-4">Frontend Developer</h4>
            <p className="mb-0">
              I&apos;m curious about the inner workings of things.
            </p>
            <p className="mb-5">
              Rather than overly flashy visuals, I focus on the build process
              and performance optimization.
            </p>
          </Col>
          <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mx-auto">
            <ButtonGroup size="md" vertical={window.innerWidth < 576}>
              <Button className="text-uppercase" tag={Link} to="/about">
                Learn About Me
              </Button>
              <Button className="text-uppercase" tag={Link} to="/projects">
                See Projects I&apos;ve Been Working On
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
