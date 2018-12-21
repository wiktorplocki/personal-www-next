import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import shortid from 'shortid';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { environments } from '../../../environments';

// eslint-disable-next-line prefer-arrow-callback
const ProjectsList = React.memo(function ProjectsList() {
  const [projects, setProjects] = useState([]);
  // useEffect(() => async () =>
  //   setProjects(await (await fetch(environments.API_URL)).json().results)
  // );
  useEffect(() => {
    fetch(environments.API_URL)
      .then(res => res.json())
      .then(res => setProjects(res));
  }, []);
  /* eslint no-return-assign: "error" */
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    try {
      document.title = 'Wiktor Płocki - Projects';
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <Container className="ProjectsList">
      <Row>
        <Col>
          <h1 className="mt-5 mb-5">Projects</h1>
          <section className="mb-3">
            {_.isEmpty(projects) ? (
              <h2>
                <span>
                  <FontAwesomeIcon icon={faCircleNotch} spin />
                </span>
                <span> Fetching projects...</span>
              </h2>
            ) : (
              <Row>
                {projects.map(project => (
                  <Col md="6" xs="12">
                    <Card className="project-card" key={shortid.generate()}>
                      <CardBody>
                        <CardTitle>{project.title}</CardTitle>
                        <CardText>{project.description}</CardText>
                        <CardLink tag={Link} to={`/projects/${project.id}`}>
                          Details
                        </CardLink>
                        <CardLink href={project.project_url}>Link</CardLink>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
});

export default ProjectsList;
