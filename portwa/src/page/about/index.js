import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import { dataabout, meta, Hobby, Future, skills } from "../../contentMe";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="7" className="d-flex justify-content-center align-items-center">
            <p>{dataabout.aboutme}</p>
          </Col>
        </Row>
        <hr />
        <br />

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">My Skills</h3>
          </Col>
          <Col lg="7" className="grid-container">
            {skills.map((skill, i) => (
              <Card key={i} className="skill-card text-center">
                <Card.Body>
                  <h3 className="card-title">{skill.name}</h3>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        <hr />

        <Row className="sec_sp">
          <Col lg="5" className="d-flex justify-content-start">
            <h3 className="color_sec py-4">My Future</h3>
          </Col>
          <Col lg="7" className="d-flex justify-content-start">
            {Future.map((future, i) => (
              <p key={i}>{future.MyFuture}</p>
            ))}
          </Col>
        </Row>
        <hr />

      </Container>
    </HelmetProvider>
  );
};
