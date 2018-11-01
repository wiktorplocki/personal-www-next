import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
  Row
} from 'reactstrap';

const ProjectsDetail = match => {
  const [project, getProject] = useState(null);
  useEffect(url => {
    fetch(url, { mode: 'no-cors' })
      .then(res => res.json())
      .then(res => getProject(res));
  }, []);
  /* eslint no-return-assign: "error" */
  useEffect(() => (document.title = `Wiktor Płocki - Project`), []);
  return (
    <Container>
      <Row>
        <Col xl="12" lg="12" md="12" sm="12" xs="12">
          <Card>
            <CardImg
              top
              width="100%"
              src="http://via.placeholder.com/1108x700"
            />
            <CardBody>
              <CardTitle>This Site</CardTitle>
              <CardSubtitle>Technologies:</CardSubtitle>
              <CardText>
                <span>React, Koa, GraphQL (future), MongoDB</span>
              </CardText>
              <CardSubtitle>Description:</CardSubtitle>
              <CardText>
                <div>
                  Personal website made with React 16.7.alpha.0. Focusing mostly
                  on optimization and performance over visual fidelity.
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsDetail;
