import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li>
                  <a
                    href="https://github.com/codestates/Bryta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/codestates/Bryta/wiki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wiki
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-logo">
                <img
                  className="footer-logo-img"
                  alt="icon"
                  src={process.env.PUBLIC_URL + "/icon192.png"}
                />
                <div className="footer-logo-text">Bryta</div>
              </div>
            </div>
            <div className="footer-col">
              <h4>Team members</h4>
              <ul>
                <li>
                  <a
                    href="https://github.com/ehdgusdl9177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="teammember"
                  >
                    김동현
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tjddmsdl2056"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    이성은
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kimdlzp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    김수영
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/11210111"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    강미정
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
