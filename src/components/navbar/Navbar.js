import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logohealth.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";


function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
      
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
          >
            About
          </Link>
          <Link
            className="nav-link"
            to="services"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
          <Link
            className="nav-link"
            to="partners"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Partners
          </Link>
          <Link
            className="nav-link"
            to="products"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Products
          </Link>
          <Link
            className="nav-link"
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
      </div>
    </nav>
  );
}

export default Navbar;
