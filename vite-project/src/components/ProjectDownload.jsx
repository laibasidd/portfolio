import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import './ProjectDownload.css';  // Use a similar CSS file as ResumeNew.css

function ProjectDownload() {
  return (
    <Container fluid className="project-section">
      <Row className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Col xs={12} md={6} className="text-center">
          {/* Heading at the top */}
          <h1 className="project-heading">Download Project PDF</h1>

          {/* Short paragraph below the heading */}
          <p className="project-description">
            During my university studies and internship, I worked on a few projects that helped me gain practical experience. Below are three selected projects I've worked on, with brief descriptions and download options.
          </p>

          {/* Centered button */}
          <a
            href="/project-details.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <AiOutlineDownload className="download-icon" />
            <span className="download-text">Download Project</span>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDownload;
