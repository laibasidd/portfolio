import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import contactPic from '../assets/contactPic.jpeg';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Get in Touch</h1>
          <div className="contact-card">
            <div className="contact-info-box">
              <p><strong><FaEnvelope /> Email 1:</strong> <a href="mailto:laibatauseef7@gmail.com">laibatauseef7@gmail.com</a></p>
              <p><strong><FaEnvelope /> Email 2:</strong> <a href="mailto:laibatauseef784@gmaail.com">laibatauseef784@gmaail.com</a></p>
              <p><strong><FaPhoneAlt /> Phone:</strong> <a href="tel:(+92)3343058356">03343058356</a></p>
              <p><strong><FaGithub /> GitHub:</strong> <a href="https://github.com/laibasidd" target="_blank" rel="noopener noreferrer">github.com/laibasidd</a></p>
              <p><strong><FaLinkedin /> LinkedIn:</strong> <a href="https://www.linkedin.com/in/laiba-siddiqui-8459772b1" target="_blank" rel="noopener noreferrer">linkedin.com/in/laibasidd</a></p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <img src={contactPic} alt="Contact" className="contact-img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
