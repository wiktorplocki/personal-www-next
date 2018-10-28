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
  const [projects, fetchProjects] = useState([]);
  return (
    <Container>
      <Row>
        <Col xl="4" lg="4" md="4" sm="4" xs="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            />
            <CardBody>
              <CardTitle>Application Name</CardTitle>
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
