import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../contentMe";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact</title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Follow Me</h3>
            <address>
              <strong>Email :</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br/>
              <br/>
              <strong>Facebook :</strong>{" "}
              <a href={contactConfig.YOUR_FACEBOOK} target="_blank" rel="noopener noreferrer">
                {contactConfig.YOUR_FACEBOOK}
              </a>
              <br/>
              <br/>
              <strong>Line ID :</strong>{" "}{contactConfig.YOUR_LINE}
              <br/>
              <br/>
              <strong>Tel :</strong>{" "}{contactConfig.YOUR_TEL}
              <br/>
              <br/>
              <strong>GitHub :</strong>{" "}
              <a href={contactConfig.YOUR_GITHUB} target="_blank" rel="noopener noreferrer">
                {contactConfig.YOUR_GITHUB}
              </a>
            </address>
          </Col>
          <Col lg="7" className="d-flex align-items-center justify-content-center">
            <img 
              src={contactConfig.YOUR_IMAGE} 
              alt="Contact" 
              className="img-fluid rounded"
              style={{ maxWidth: "500px", height: "500px" }}
            />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
