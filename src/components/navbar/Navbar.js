import React from "react";
import "./Navbar.css";
import logo from "../../assets/logohealth.png";

function Navbar () {
  return (
    <nav className="container">
      <img src={logo} alt="My website logo" className="logo"></img>
      <div>
        <a class="nav-link" href="about.html">
          About
        </a>
        <a class="nav-link" href="services.html">
          Services
        </a>
        <a class="nav-link" href="partners.html">
          Partners
        </a>
        <a class="nav-link" href="products.html">
          Products
        </a>
        <a class="nav-link" href="contact.html">
         Contact 
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
