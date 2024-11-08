import React from "react";
import "./About.css";
import about_img from "../../assets/about_img.png";
import play_icon from "../../assets/play_icon.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Empowering Health Through Innovation and Expertise</h2>
        <p>
          Access Pharma International Ltd (API) is a pharmaceutical management
          and consultancy firm dedicated to enhancing and developing healthcare
          delivery systems within communities.
        </p>
        <p>
          Our core expertise lies in ensuring the sustainability of healthcare
          businesses through workforce upskilling and the optimization of
          operational systems. While we, like other pharmaceutical companies,
          strive to maintain an uninterrupted supply of high-quality medicines,
          healthcare products, and devices, we distinguish ourselves by
          embedding quality into every aspect of our services and products from
          the very beginning and throughout the entire production process.
        </p>
        <p>
          This commitment requires not only highly qualified personnel but also
          a clear, goal-oriented management approach and optimized, up-to-date
          operational systems. By focusing on these crucial elements, we help
          healthcare professionals achieve their objectives and ensure a
          positive impact on patient care.
        </p>
      </div>
    </div>
  );
}

export default About;
