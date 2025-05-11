import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiVercel, SiWebflow, SiFigma } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { FaMicrosoft, FaDesktop } from "react-icons/fa";  // Using FaDesktop for VSCode alternative
import { DiDatabase } from "react-icons/di";  // Using DiDatabase for SQL Server alternative

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaDesktop /> {/* Desktop Icon as alternative to VSCode */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrosoft /> {/* Microsoft icon for general Microsoft tools */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebflow /> {/* Webflow */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* Figma */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase /> {/* Database Icon as alternative to SQL Server */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Vercel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsDiscord /> {/* Discord */}
      </Col>
    </Row>
  );
}

export default Toolstack;
