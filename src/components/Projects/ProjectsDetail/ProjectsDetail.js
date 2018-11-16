import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
  Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { environments } from '../../../environments';

const ProjectsDetail = ({ match }) => {
  const [project, setProject] = useState(null);
  useEffect(() => {
    fetch(`${environments.API_URL}/${match.params.id}`)
      .then(res => res.json())
      .then(res => setProject(res));
  }, []);
  // 1108x700
  /* eslint no-return-assign: "error" */
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    try {
      document.title = `Wiktor Płocki - Project: ${project.title}`;
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
                  <CardTitle>{project.title}</CardTitle>
                  <CardSubtitle>Technologies:</CardSubtitle>
                  <CardText>
                    {project.technologies.map(
                      tech =>
                        tech === _.last(project.technologies) ? (
                          <span key={Math.random()}>{tech}.</span>
                        ) : (
                          <span key={Math.random()}>{tech}, </span>
                        )
                    )}
                  </CardText>
                  <CardSubtitle>Description:</CardSubtitle>
                  <CardText>{project.description}</CardText>
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
  match: PropTypes.shape.isRequired
};
