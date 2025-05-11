import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaFileAlt,
  FaPhone,
  FaGithub,
  FaStar,
  FaCertificate,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#111111] shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        {/* Navigation Links */}
        
        <div className="nav-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
       
        <Link to="/" className="nav-link">
    <FaHome />
    <span>Home</span>
  </Link>
  <Link to="/about" className="nav-link">
    <FaUserAlt />
    <span>About</span>
  </Link>
  <Link to="/projects" className="nav-link">
    <FaProjectDiagram />
    <span>Projects</span>
  </Link>
  <Link to="/resume" className="nav-link">
    <FaFileAlt />
    <span>Resume</span>
  </Link>
  <Link to="/certificates" className="nav-link">
    <FaCertificate />
    <span>Certificates</span>
  </Link>
  <Link to="/contact" className="nav-link">
    <FaPhone />
    <span>Contact Me</span>
  </Link>
       

</div>

  
</div>

        
      
       

    </nav>


  );
};

export default Navbar;
