import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import shortid from 'shortid';
import {
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
  Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const ProjectsDetail = ({ match }) => {
  const [project, setProject] = useState(null);
  const query = `query {
    singleProject(projectId: "${match.params.id}") {
      name
      client
      description
      link
      technologies {
        label
      }
    }
  }`;
  useEffect(() => {
    fetch(`${process.env.GRAPHQL_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(result => setProject(result.data.singleProject));
  }, []);
  // 1108x700
  /* eslint no-return-assign: "error" */
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    try {
      document.title = `Wiktor Płocki - Project: ${project.name}`;
    } catch (e) {} // eslint-disable-line no-empty
  });
  return (
    <Container>
      <Row>
        <Col xl="12" lg="12" md="12" sm="12" xs="12">
          <Card>
            <CardBody>
              {_.isNil(project) ? (
                <div className="d-flex justify-content-center align-items-center">
                  <h2>
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                  </h2>
                </div>
              ) : (
                <React.Fragment>
                  <CardTitle>{project.name}</CardTitle>
                  {_.isEmpty(project.client) ? null : (
                    <React.Fragment>
                      <CardSubtitle>Client:</CardSubtitle>
                      <CardText>{project.client}</CardText>
                    </React.Fragment>
                  )}
                  <CardSubtitle>Technologies:</CardSubtitle>
                  <CardText>
                    {project.technologies.map(
                      tech =>
                        tech === _.last(project.technologies) ? (
                          <span key={shortid.generate()}>{tech.label}.</span>
                        ) : (
                          <span key={shortid.generate()}>{tech.label}, </span>
                        )
                    )}
                  </CardText>
                  <CardSubtitle>Description:</CardSubtitle>
                  <CardText>{project.description}</CardText>
                  <CardLink href={project.link}>Link</CardLink>
                </React.Fragment>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsDetail;

ProjectsDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
