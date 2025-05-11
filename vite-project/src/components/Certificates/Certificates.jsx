import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import intern from "../../Assets/Certificates/intern.png";
import cert2 from "../../Assets/Certificates/cert2.png";
import cert3 from "../../Assets/Certificates/cert3.png";

function Certificates() {
  return (
    <Container fluid className="resume-section">
      <Row className="justify-content-center mb-4">
        <h1 className="text-center text-white">My Certifications</h1>
      </Row>

      <Row className="justify-content-center g-4">
        <Col md={8} className="d-flex justify-content-center">
          <img src={intern} alt="Certificate 1" className="img-fluid rounded shadow" />
        </Col>
        <Col md={8} className="d-flex justify-content-center">
          <img src={cert2} alt="Certificate 2" className="img-fluid rounded shadow" />
        </Col>
        <Col md={8} className="d-flex justify-content-center">
          <img src={cert3} alt="Certificate 3" className="img-fluid rounded shadow" />
        </Col>
      </Row>

      <div className="w-[100%] flex justify-center items-center mt-4">
      <a
  href="/Laiba_Certificates.pdf"
  download="Laiba_Certificates.pdf"
  className="flex flex-row gap-2 min-w-[25%] items-center no-underline hover:bg-[#6d20c5d7] hover:border-[#6d20c5d7] bg-[#623686] rounded-lg outline-none text-neutral-200 border-2 p-2 border-[#623686] justify-center"
>
  <AiOutlineDownload className="2xl" />
  <span>Download All Certificates (PDF)</span>
</a>

      </div>
    </Container>
  );
}

export default Certificates;
