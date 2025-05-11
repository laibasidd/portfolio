import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Home2 from "./Home2";
import Type from "./Type";
import hi from "../assets/images/hi.png"; // Ensure image is here

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There!
              </h1>

              <h1 className="heading-name">
                Myself
                <strong className="main-name"> LAIBA TAUSEEF</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={hi}
                alt="home pic"
                className="img-fluid hidden myPic"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
