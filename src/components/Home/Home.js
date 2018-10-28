import React from 'react';
import _ from 'lodash';
import { Button, ButtonGroup, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line prefer-arrow-callback
const Home = () => (
  <main className="masthead text-center d-flex" id="masthead">
    <Container className="my-auto flex-center">
      <Row>
        <Col lg="10" md="3" className="mx-auto">
          <h1 className="text-uppercase">
            <strong>Wiktor Płocki</strong>
          </h1>
        </Col>
        <Col lg="10" md="3" className="mx-auto">
          <h4 className="mb-5 display-4">Frontend Developer</h4>
          <p className="mb-0">
            I'm curious about the inner workings of things.
          </p>
          <p className="mb-5">
            Rather than overly flashy visuals, I focus on the build process and
            performance optimization.
          </p>
          <ButtonGroup size="md">
            <Button className="text-uppeercase" tag={Link} to="/about">
              Learn About Me
            </Button>
            <Button className="text-uppeercase" tag={Link} to="/projects">
              See Projects I've Been Working On
            </Button>
            <Button className="text-uppeercase" tag={Link} to="/contact">
              Contact Me
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
