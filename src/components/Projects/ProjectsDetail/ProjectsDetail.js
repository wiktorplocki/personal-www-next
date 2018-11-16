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
import { environments } from '../../../environments';

import Loading from '../../Loading/Loading';

const ProjectsDetail = ({ match }) => {
  const [project, setProject] = useState();
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
  if (!project) {
    return <Loading />;
  }
  return (
    <Container>
      <Row>
        <Col xl="12" lg="12" md="12" sm="12" xs="12">
          <Card>
            <CardBody>
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
