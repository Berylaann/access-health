import React from "react";
import "./Footer.css";
import linkedIn_icon from "../../assets/linkedIn-icon.png";
import facebook_icon from "../../assets/facebook-icon.png";
function Footer() {
  return (
    <div className="footer">
      <p>&copy;2024 Apiltd. All Rights Reserved</p>
      <ul>
        <li>
          <img src={facebook_icon} alt="find us on linkedIn" />
          <a
            className="social-link"
            href="https://www.facebook.com/accesspharmainternational/"
            target="_blank"
            rel="noopener noreferrer"
          > apiltd
          </a>
        </li>

        <li>
          <img src={linkedIn_icon} alt="find us on linkedIn" />
          <a className="social-link"
            href="https://www.linkedin.com/company/apiltd/" target="_blank"
          rel="noopener noreferrer"> accesspharmainternational
          </a>
        </li>
        <li> Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}

export default Footer;
