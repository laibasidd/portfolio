import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import pic from "../assets/images/pic.png";
import "../App";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I am a <span className="purple">Web Developer</span>
            </h1>
            <p className="home-about-body">
              I’m a passionate <span className="purple">WEB Developer</span> focused on creating beautiful, high-performing web applications. I also work as a <span className="purple">Freelancer</span>, helping clients bring their digital visions to life.
              <br />
              <br />
              I enjoy turning complex problems into simple, elegant user experiences. With every project, I aim to create clean, accessible, and responsive designs that truly make an impact.
              <br />
              <br />
              I value continuous learning and enjoy exploring new tools to improve my craft. My work is driven by creativity, precision, and a strong sense of purpose. I'm always excited to collaborate on meaningful projects that challenge me and help me grow.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={pic} className="img-fluid myPic" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="flex flex-col gap-2 items-center justify-center text-white mt-4">
            <h1>FIND ME ON</h1>
            <ul className="flex flex-row gap-4 items-center justify-center ps-0 md:text-sm">
              <li className="p-2 w-fit h-fit rounded-full flex items-center justify-center hover:bg-purple-800 transition">
                <a
                  href="https://github.com/laibasidd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-2xl"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="p-2 w-fit h-fit rounded-full flex items-center justify-center hover:bg-purple-800 transition">
                <a
                  href="https://www.facebook.com/share/16Eq6TGP4j/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-2xl"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="p-2 w-fit h-fit rounded-full flex items-center justify-center hover:bg-purple-800 transition">
                <a
                  href="https://www.linkedin.com/in/laiba-siddiqui-8459772b1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-2xl"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="p-2 w-fit h-fit rounded-full flex items-center justify-center hover:bg-purple-800 transition">
                <a
                  href="https://www.instagram.com/laiba__siddiqui7?igsh=MTY3OHQ4YXhwcHQydQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-2xl"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p className="mt-2">
              Always Open to <span className="purple">CONNECT!!!</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
