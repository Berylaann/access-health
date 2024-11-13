import React from 'react';
import Title from '../title/Title';
import "./Partners.css";
import partner_icon1 from "../../assets/lifestraw_logo.png";
import partner_icon2 from "../../assets/partner-img3.jpeg";
import partner_icon from "../../assets/partner-icon.png";
import partner_img1 from "../../assets/partner-img.jpeg";
import partner_img2 from "../../assets/partner-img1.jpeg";
import partner_img3 from "../../assets/partner-img.jpeg";
function Partners() {
  return (
    <section id="partners">
      <Title
        subTitle="OUR PARTNERS"
        title="We facilitate the distribution of our partner's products locally."
      />
      <div className="partners">
        <div className="partner">
          <img src={partner_img1} alt="partner image" />
          <div className="caption">
            <img src={partner_icon1} alt="partner icon" />
            <p>LifeStraw</p>
          </div>
        </div>
        <div className="partner">
          <img src={partner_img2} alt="partner image" />
          <div className="caption">
            <img src={partner_icon2} alt="partner icon" />
            <p>Votre Pharmacie</p>
          </div>
        </div>
        <div className="partner">
          <img src={partner_img3} alt="partner image" />
          <div className="caption">
            <img src={partner_icon} alt="partner icon" />
            <p>Topicrem Cosmetics Brand</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
