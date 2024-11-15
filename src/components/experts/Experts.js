import React, { useRef } from "react";
import "./Experts.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import expert_1 from "../../assets/expert-1.jpeg";
import expert_2 from "../../assets/expert-2.jpeg";
import expert_3 from "../../assets/expert-3.jpeg";
import expert_4 from "../../assets/expert-4.jpeg";
import Title from "../title/Title";

function Experts() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <section id="experts">
      <Title subTitle="EXPERTS" title="Chat with an expert" />
      <div className="experts">
        <img
          src={next_icon}
          alt="circle arrow next"
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt="circle arrow back"
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li className="slide">
              <div className="slide"></div>
              <div className="expert-info">
                <img src={expert_1} alt="a man in suit" />
                <div>
                  <h3>Dickson Ajame</h3>
                  <span>Access Pharma Ltd, Cameroon</span>
                </div>
              </div>
              <p>
                Ajame Dickson is a licensed pharmacist with over 20 years
                experience in pharmaceutical management. Connect and send a
                message on LinkedIn now!
              </p>
              <a
                href="https://www.linkedin.com/in/bah-ajame-dickson-b9a18bb2/"
                className="btn btn-outline-secondary"
              >
                Connect
              </a>
            </li>
            <li className="slide">
              <div className="slide"></div>
              <div className="expert-info">
                <img src={expert_2} alt="profile of a lady" />
                <div>
                  <h3>Beryl Ann</h3>
                  <span>Belle Beryl, UK</span>
                </div>
              </div>
              <p>
                A key marketing and operations executive, who puts clients needs
                at the center of our growth startegy. Connect and send a message
                on LinkedIn now!
              </p>
              <a
                href="https://www.linkedin.com/in/berylaan-projectmanagementlondon/"
                className="btn btn-outline-secondary"
              >
                Connect
              </a>
            </li>
            <li className="slide">
              <div className="slide"></div>
              <div className="expert-info">
                <img src={expert_3} alt="head shot of a lady" />
                <div>
                  <h3>Daryl Dubois</h3>
                  <span>Access Pharma Ltd, Cameroon</span>
                </div>
              </div>
              <p>
                Daryl Dubois is our finance director with a startegic approach
                that is cost effective and value-based. Connect and send a
                message on LinkedIn now!
              </p>
              <a
                href="https://www.linkedin.com/in/bah-ajame-dickson-b9a18bb2/"
                className="btn btn-outline-secondary"
              >
                Connect
              </a>
            </li>
            <li className="slide">
              <div className="slide"></div>
              <div className="expert-info">
                <img src={expert_4} alt="man in blue suit" />
                <div>
                  <h3>Achoh</h3>
                  <span>Access Pharma International Ltd, Cameroon</span>
                </div>
              </div>
              <p>
                A key marketing and operations executive, who puts clients needs
                at the center of our growth startegy. Connect and send a message
                on LinkedIn now!
              </p>
              <a
                href="https://www.linkedin.com/in/berylaan-projectmanagementlondon/"
                className="btn btn-outline-secondary"
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experts;
