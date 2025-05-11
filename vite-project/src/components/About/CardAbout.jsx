import React from "react";
import Card from "react-bootstrap/Card";

function CardAbout() {
  return (
    <Card className="quote-card-view">
      <Card.Body className="p-0">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <ul className="text-start p-0">
              <li>
                <span>Profession:</span> Frontend Developer
              </li>
              <li>
                <span>Specialization:</span> ReactJS, JavaScript,ReduxToolkit, Node JS ,HTML, CSS, Animation,
              </li>
             
              <li>
                <span>Focus:</span> Building responsive and interactive user interfaces
              </li>
              <li>
                <span>Passion:</span> Creating seamless web experiences
              </li>
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CardAbout;
