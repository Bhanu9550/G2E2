import { Link } from "react-scroll";
import {
  FaLeaf,
  FaBolt,
  FaSun,
  FaArrowUp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import Logo from "../../assets/Logo.png";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="g2e2-footer">
      <div className="footer-main">

        <div className="footer-container">

          <div className="footer-brand">

            <img src={Logo} alt="G2E2 - Global Green Eco Energy" className="footer-logo"/>

            <p className="footer-description">
              G2E2 — Global Green Eco Energy is focused on creating
              sustainable solutions that connect renewable energy,
              technology and everyday life.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" className="footer-social">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" className="footer-social">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="footer-social">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="home" smooth={true} duration={600}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={600}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={600}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="founders" smooth={true} duration={600}>
                  Founders
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={600}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Solutions</h3>
            <ul>
              <li>
                <span><FaBolt />
                  EV Charging
                </span>
              </li>
              <li>
                <span><FaSun />
                  Solar Energy
                </span>
              </li>
              <li>
                <span><FaLeaf />
                  Green Infrastructure
                </span>
              </li>
              <li>
                <span><FaBolt />
                  Smart Energy
                </span>
              </li>
              <li>
                <span><FaLeaf />
                  Eco-Friendly Innovation
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-company">
            <h3>G2E2</h3>
            <p>Global Green Eco Energy</p>

            <p className="footer-company-text">Renewable Energy
              <br />Eco-Friendly Innovation<br />
              Sustainable Living
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            <strong> © {new Date().getFullYear()}{" "}
            G2E2 — Global Green Eco Energy. 
            All rights reserved.</strong>
          </p>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top"  >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;