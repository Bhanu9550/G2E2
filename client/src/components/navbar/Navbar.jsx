import { useState } from "react";
import Logo from "../../../../assets/Logo.png";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <section className="nav-bar">
        <div className="nav-container">
          <img className="logo" src={Logo} alt="G2E2 Logo" />
          <div className="navLinksContainer">
            <Link activeClass="active-navLink" className="navLinks" to="home" spy={true} smooth={true} duration={500} >
              Home
            </Link>
            <Link activeClass="active-navLink" className="navLinks" to="about" spy={true} smooth={true} duration={500} >
              About
            </Link>
            <Link activeClass="active-navLink" className="navLinks" to="services" spy={true} smooth={true} duration={500} >
              Services
            </Link>
            <Link activeClass="active-navLink" className="navLinks" to="founders" spy={true} smooth={true} duration={500} >
              Founders
            </Link>
            <Link activeClass="active-navLink" className="navLinks" to="contact" spy={true} smooth={true} duration={500} >
              Contact
            </Link>
          </div>
          <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} >
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
        </div>
        <div className={`hamburger-menu ${menuOpen ? "show" : ""}`} >
          <Link className="nav-link" to="home" smooth={true} duration={500} onClick={closeMenu} >
            Home
          </Link>
          <Link className="nav-link" to="about" smooth={true} duration={500} onClick={closeMenu} >
            About
          </Link>
          <Link className="nav-link" to="services" smooth={true} duration={500} onClick={closeMenu} >
            Services
          </Link>
          <Link className="nav-link" to="founders" smooth={true} duration={500} onClick={closeMenu} >
            Founders
          </Link>
          <Link className="nav-link" to="contact" smooth={true} duration={500} onClick={closeMenu} >
            Contact
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;