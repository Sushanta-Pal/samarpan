import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../../assets/logo (1).jpg";
import "./Footer.css";

const Footer=()=> {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <img src={logo} alt="Samarpan Logo" className="footer-logo" />
        <p>© 2025 Sushanta_IT. All Rights Reserved.</p>
      </div>

      <div className="footer-section">
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/alumini">Alumni</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>Email: contact@samarpan.org</p>
        <p>Phone: +91 9876543210</p>
        <div className="footer-social-icons">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
