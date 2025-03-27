import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { dataportfolio, meta } from "../../contentMe";
import wachii from "../../assets/Pro.JPG"
import wachii2 from "../../assets/Pro2.JPG"

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Project | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Project</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="10" className="d-flex justify-content-start">
            {dataportfolio.map((data, i) => (
              <p key={i}>{data.description}</p>
            ))}
          </Col>
        </Row>

        <Row>
          {dataportfolio.map((project, index) => (
            <Col lg="6" key={index} className="mb-4">
              <div className="po_item_wrapper">
                <Card className="po_item img flex-grow-1 me-2">
                  <Card.Img 
                    variant="top" 
                    src={wachii}
                    className="po_item_img"
                  />
                </Card>
                <Card className="po_item img2 flex-grow-10">
                  <Card.Img 
                    variant="top" 
                    src={wachii2} 
                    
                    className="po_item_img2"
                  />
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="sec_sp">
          <Col lg="12" className="d-flex justify-content-start">
            {dataportfolio.map((data, i) => (
              <p key={i}>{data.detail}</p>
            ))}
          </Col>
        </Row>
        
        <hr />

        <Container>
          <Row>
            {["description2", "description3", "description4"].map((desc, index) => (
              <Col md={4} key={index}>
                <div className="po_items_ho">
                  {dataportfolio.map((data, i) => (
                    <div key={i} className="po_item">
                      <img src={data.img3} alt={data[desc]} />
                      <div className="content">
                        <p>{data[desc]}</p>
                        <a href={data[`link${index + 1}`]}>View Project</a>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <br/>
        <br/>
        <hr/>
      </Container>
    </HelmetProvider>
  );
};
