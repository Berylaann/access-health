import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logohealth.png";
import Button from "../button/Button";
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
      
  return (
    <nav className={`container ${sticky ? `dark-nav` : ""}`}>
      <img src={logo} alt="My website logo" className="logo"></img>
      <div>
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
