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
import {
  faCircleNotch,
  faTrashAlt,
  faEdit
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import AuthContext from '../../../context/AuthContext';

// eslint-disable-next-line prefer-arrow-callback
const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const query = `query {
    projects {
      _id
      name
      description
      link
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
  /* eslint no-underscore-dangle: 0 */
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    try {
      document.title = 'Wiktor Płocki - Projects';
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }, []);
  return (
    <AuthContext.Consumer>
      {context => (
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
                            <div className="d-flex flex-row justify-content-between admin-pane">
                              <CardTitle>{project.name}</CardTitle>
                              {context.token ? (
                                <div className="d-flex flex-row">
                                  <FontAwesomeIcon
                                    icon={faEdit}
                                    onClick={() => console.log('Edit!')}
                                    className="mx-1 admin-icon"
                                  />
                                  <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    onClick={() => console.log('Trash!')}
                                    className="mx-1 admin-icon"
                                  />
                                </div>
                              ) : null}
                            </div>
                            <CardText className="card-text-box">
                              {_.truncate(project.description, {
                                length: 203,
                                omission: '',
                                separator: /.? +/
                              })}
                            </CardText>
                            <CardLink
                              tag={Link}
                              to={`/projects/${project._id}`}
                            >
                              Details
                            </CardLink>
                            {project.link && (
                              <CardLink href={project.link}>Link</CardLink>
                            )}
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
      )}
    </AuthContext.Consumer>
  );
};

export default ProjectsList;
