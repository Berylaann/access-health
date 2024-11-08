import React, { useRef } from "react";
import "./Users.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import user_1 from "../../assets/user-1.jpeg";
import user_2 from "../../assets/user-2.jpeg";
import user_3 from "../../assets/user-3.jpeg";
import user_4 from "../../assets/user-4.jpeg";

function Users() {
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
    <div className="users">
      <img
        src={next_icon}
        alt="user image"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="user image"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li className="slide">
            <div className="slide"></div>
            <div className="user-info">
              <img src={user_1} alt="user image1" />
              <div>
                <h3>Dickson Ajame</h3>
                <span>Access Pharma Ltd, Cameroon</span>
              </div>
            </div>
            <p>
              Ajame Dickson is a licensed pharmacist with over 20 years
              experience in pharmaceutical management. Connect and send a message
              on LinkedIn now!
            </p>
            <a
              href="https://www.linkedin.com/in/bah-ajame-dickson-b9a18bb2/"
              class="btn btn-outline-secondary"
            >
              Connect
            </a>
          </li>
          <li className="slide">
            <div className="slide"></div>
            <div className="user-info">
              <img src={user_2} alt="user image2" />
              <div>
                <h3>Beryl Ann</h3>
                <span>Belle Beryl, UK</span>
              </div>
            </div>
            <p>
              A key marketing and operations executive, who puts
              clients needs at the center of our growth startegy. Connect and
              send a message on LinkedIn now!
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
            <div className="user-info">
              <img src={user_3} alt="user image3" />
              <div>
                <h3>Daryl Dubois</h3>
                <span>Access Pharma Ltd, Cameroon</span>
              </div>
            </div>
            <p>
              Daryl Dubois is our finance director with a startegic approach
              that is cost effective and value-based. Connect and send a message
              on LinkedIn now!
            </p>
            <a
              href="https://www.linkedin.com/in/bah-ajame-dickson-b9a18bb2/"
              class="btn btn-outline-secondary"
            >
              Connect
            </a>
          </li>
          <li className="slide">
            <div className="slide"></div>
            <div className="user-info">
              <img src={user_4} alt="user image4" />
              <div>
                <h3>Achoh</h3>
                <span>Access Pharma International Ltd, Cameroon</span>
              </div>
            </div>
            <p>
              A key marketing and operations executive, who puts
              clients needs at the center of our growth startegy. Connect and
              send a message on LinkedIn now!
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
  );
}

export default Users;
