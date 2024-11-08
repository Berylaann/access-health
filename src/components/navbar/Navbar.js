import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logohealth.png";
import Button from "../button/Button";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? `dark-nav` : ""}`}>
      <img src={logo} alt="My website logo" className="logo"></img>
      <div>
        <a class="nav-link" href="#about">
          About
        </a>
        <a class="nav-link" href="#services">
          Services
        </a>
        <a class="nav-link" href="#partners">
          Partners
        </a>
        <a class="nav-link" href="#products">
          Products
        </a>
        <a class="nav-link" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
