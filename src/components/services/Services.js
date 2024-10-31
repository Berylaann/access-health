import React from 'react';
import "./Services.css";
import service_img from "../../assets/service_img.png";
import service_icon from "../../assets/service_icon.png";

function Services() {
  return (
    <div className="services">
      <div className="service">
        <img src={service_img} alt="" />
        <div className="caption">
          <img src={service_icon} alt="" />
          <p>Management Consultancy</p>
        </div>
      </div>
      <div className="service">
        <img src={service_img} alt="" />
        <div className="caption">
          <img src={service_icon} alt="" />
          <p>Design and Technology</p>
        </div>
      </div>
      <div className="service">
        <img src={service_img} alt="" />
        <div className="caption">
          <img src={service_icon} alt="" />
          <p>Distribution Services</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
