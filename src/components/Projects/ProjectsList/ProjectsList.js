import React, { lazy, Suspense, useState, useEffect } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Col,
  Button,
  Row
} from 'reactstrap';

// eslint-disable-next-line prefer-arrow-callback
const ProjectsList = React.memo(function ProjectsList() {
  // TODO: Implement API
  const [projects, fetchProjects] = useState([]);
  useEffect(url => {
    fetch(url, { mode: 'no-cors' })
      .then(res => res.json())
      .then(res => fetchProjects(res.results));
  }, []);
  /* eslint no-return-assign: "error" */
  useEffect(() => (document.title = `Wiktor Płocki - Projects`), []);
  return (
    <Container>
      <Row>
        <Col xl="4" lg="4" md="4" sm="4" xs="4">
          <h1>Projects</h1>
          <Card key={Math.random()}>
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            />
            <CardBody>
              <CardTitle>App Title</CardTitle>
              <CardText>Quick summary of the project</CardText>
              <Button>Details</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
});

export default ProjectsList;
