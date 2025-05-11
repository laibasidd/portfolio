import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import './ResumeNew.css';  // Import the CSS file

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Row className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Col xs={12} md={6} className="text-center">
          {/* Heading at the top */}
          <h1 className="resume-heading">Download My Resume</h1>

          {/* Paragraph below the heading */}
          <p style={{ color: 'white', marginTop: '1rem' }}>
            Here is a brief overview of my educational background, technical skills, and work experience.
            This resume highlights my journey so far, including academic achievements, internship experiences, 
            and the tools and technologies I’ve worked with.
          </p>

          {/* Centered button */}
          <a
            href="/RESUME.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <AiOutlineDownload className="download-icon" />
            <span className="download-text">Download Resume</span>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
