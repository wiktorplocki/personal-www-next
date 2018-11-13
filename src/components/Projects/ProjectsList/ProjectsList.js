import React, { useState, useEffect } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Container,
  Col,
  Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { environments } from '../../../environments';

// eslint-disable-next-line prefer-arrow-callback
const ProjectsList = React.memo(function ProjectsList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(environments.API_URL)
      .then(res => res.json())
      .then(res => setProjects(res));
  }, []);
  /* eslint no-return-assign: "error" */
  useEffect(() => (document.title = `Wiktor Płocki - Projects`), []);
  return (
    <Container>
      <Row>
        <Col xl="4" lg="4" md="4" sm="4" xs="4">
          <h1 className="mt-5 mb-5">Projects</h1>
          <section className="mb-3">
            {projects.map(project => (
              <Card key={Math.random()}>
                <CardBody>
                  <CardTitle>{project.title}</CardTitle>
                  <CardText>{project.description}</CardText>
                  <CardLink tag={Link} to={`/detail/${project.id}`}>
                    Details
                  </CardLink>
                </CardBody>
              </Card>
            ))}
          </section>
        </Col>
      </Row>
    </Container>
  );
});

export default ProjectsList;
