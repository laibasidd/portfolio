import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./Common/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProjectDownload from "./components/ProjectDownload";
import Footer from "./Common/Footer";
 import Resume from "./components/Resume/ResumeNew";
import About from "./components/About/About.jsx";
import Certificates from "./components/Certificates/Certificates";
import ScrollToTop from "./components/ScrollToTop";
import Particle from "./components/Particle"; 
import Contact from './components/Contact';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false); // Set load to false after 1200ms
    }, 1200);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Particle /> {/* Add Particle background here */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectDownload />} />
           <Route path="/about" element={<About />} /> 
          <Route path="/resume" element={<Resume />} />
           <Route path="/contact" element={<Contact />} />  
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
