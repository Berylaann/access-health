import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logohealth.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? `dark-nav` : ""}`}>
      <img src={logo} alt="access health logo" className="logo"></img>
      <div className={`nav-list ${mobileMenu ? "show-menu" : "hide-menu"}`}>
        <img
          src={menu_icon}
          alt="menu bar"
          className="menu-icon"
          onClick={toggleMenu}
        />
        <Link
          className="nav-link"
          to="about"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          className="nav-link"
          to="services"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          className="nav-link"
          to="partners"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleMenu}
        >
          Partners
        </Link>
        <Link
          className="nav-link"
          to="products"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleMenu}
        >
          Products
        </Link>
        <Link
          className="nav-link"
          to="experts"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleMenu}
        >
          Experts
        </Link>
        <Link
          className="nav-link"
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
