import React from 'react';
import "./Services.css";
import service_img1 from "../../assets/service_img1.png";
import service_img2 from "../../assets/service_img2.jpg";
import service_img3 from "../../assets/service_img3.png";
import service_icon1 from "../../assets/service_icon1.png";
import service_icon2 from "../../assets/service_icon2.png";
import service_icon3 from "../../assets/service_icon3.png";
import Title from '../title/Title';

function Services() {
  return (
    <section id="services">
      <Title subTitle="OUR SERVICES" title="What we offer"/>
      <div className="services">
        <div className="service">
          <img src={service_img1} alt="service image" />
          <div className="caption">
            <img src={service_icon1} alt="service icon" />
            <p>Management Consultancy</p>
          </div>
        </div>
        <div className="service">
          <img src={service_img2} alt="service image" />
          <div className="caption">
            <img src={service_icon2} alt="service icon" />
            <p>Design and Technology</p>
          </div>
        </div>
        <div className="service">
          <img src={service_img3} alt="service image" />
          <div className="caption">
            <img src={service_icon3} alt="service icon" />
            <p>Distribution Services</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
