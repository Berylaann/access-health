import React from 'react';
import "./Services.css";
import service_img from "../../assets/service_img.png";
import service_icon from "../../assets/service_icon.png";

function Services() {
  return (
    <div className="services" id="services">
      <div className="service">
        <img src={service_img} alt="service image" />
        <div className="caption">
          <img src={service_icon} alt="service icon" />
          <p>Management Consultancy</p>
        </div>
      </div>
      <div className="service">
        <img src={service_img} alt="service image" />
        <div className="caption">
          <img src={service_icon} alt="service icon" />
          <p>Design and Technology</p>
        </div>
      </div>
      <div className="service">
        <img src={service_img} alt="service image" />
        <div className="caption">
          <img src={service_icon} alt="service icon" />
          <p>Distribution Services</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
