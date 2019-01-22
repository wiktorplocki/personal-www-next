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

// eslint-disable-next-line prefer-arrow-callback
const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const query = `query {
    projects {
      _id
      name
      client
      description
      technologies {
        label
      }
    }
  }`;
  // useEffect(() => async () =>
  //   setProjects(await (await fetch(environments.API_URL)).json().results)
  // );
  useEffect(() => {
    fetch(process.env.GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(result => setProjects(result.data.projects));
  }, []);
  /* eslint no-return-assign: "error" */
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    try {
      document.title = 'Wiktor Płocki - Projects';
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
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
                  <Col md="6" xs="12" key={shortid.generate()}>
                    <Card className="project-card" key={shortid.generate()}>
                      <CardBody>
                        <CardTitle>{project.name}</CardTitle>
                        <CardText>{project.description}</CardText>
                        <CardLink tag={Link} to={`/projects/${project._id}`}>
                          Details
                        </CardLink>
                        <CardLink href={`/projects/${project._id}`}>
                          Link
                        </CardLink>
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
};

export default ProjectsList;
