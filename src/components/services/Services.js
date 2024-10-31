import React from 'react';
import "./Services.css";
import service_img from "../../assets/service_img.png";

function Services() {
  return (
    <div className="services">
      <div className="service">
        <img src={service_img} alt="" />
      </div>
      <div className="service">
        <img src={service_img} alt="" />
      </div>
      <div className="service">
        <img src={service_img} alt="" />
      </div>
    </div>
  );
}

export default Services;
