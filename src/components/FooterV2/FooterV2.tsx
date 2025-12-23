import React, { useEffect, useState } from "react";
import "./FooterV2.css";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";

const FooterV2: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* background glow */}
      <div className="footer-glow" />

      <div className="footerContainer">
        {/* Left section */}
        <div className="footerlogo">
          <Link to="/" className="logoIMG">
            <img src="../../assets/logo.png" alt="Physoc Logo" />
          </Link>

          <Link to="/" className="logo-text">
            PHYSOC
          </Link>


          <div className="contact">
            <a
              href="https://www.instagram.com/physoc.iitd/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Icon name="instagram" width={22} height={22} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="quickLinks nav-item">
          <h3>Quick Links</h3>
          <Link to="https://physics.iitd.ac.in/">Physics Dept</Link>
          <Link to="https://csc.iitd.ac.in/">CSC</Link>
          <Link to="https://physics.iitd.ac.in/faculty">Faculties</Link>
          <Link to="https://caic.iitd.ac.in/">CAIC</Link>
        </div>

        {/* Navigation */}
        <div className="footerlinks nav-item">
          <h3>Site Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/team">Team</Link>
        </div>

        {/* Resonance */}
        <div className="resonance">
          <p className="resonance-title">Get to know about</p>

          <img
            src="src/assets/resonance.png"
            alt="Resonance"
            className="resonance-logo"
          />

          <button
            className="resonance-btn"
            onClick={() =>
              window.open("https://resonance.physociitd.in/", "_blank")
            }
          >
            Resonance
          </button>
        </div>
        <div className="copyright">
          <p>© 2025 Physics Society, IIT Delhi. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to top */}
      {showTop && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </footer>
  );
};

export default FooterV2;



