import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Techstack from "./Techstack";
import CardAbout from "./CardAbout";
import Toolstack from "./Toolstack";
import MyPic from "../../assets/images/MyPic.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I</strong> AM{" "}
              <span className="purple" style={{ fontSize: "10px" }}>
                {`(Web Developer)`}{" "}
              </span>
            </h1>
            <CardAbout />
          </Col>
          <Col md={5} className="flex items-center justify-center">
            <img src={MyPic} alt="about" className="img-fluid myPic" style={{ maxWidth: "60%", height: "auto" }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        
      </Container>
    </Container>
  );
}

export default About;
