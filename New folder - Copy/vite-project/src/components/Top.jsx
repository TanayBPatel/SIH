import React from "react";
import { useNavigate } from "react-router-dom";
import gov_logo from "../assets/images/gov_logo.png";
import ayush_logo from "../assets/images/ayush_logo.png";
import ayurveda from "../assets/images/ayurveda.png";

export default function Top() {
  const navigate = useNavigate();
  const onhandleClick = () => {
    navigate("/navbar");
  };
  const onhandlelogin = () => {
    navigate("/welcome");
  };

  return (
    <header>
      <div className="top-bar">
        <div>
          <img className="Top1Img" src={gov_logo} alt="Government of India" />
          <img className="ayurvedaimg" src={ayurveda} alt="Ayurveda" />
        </div>
        <div className="Time">Working Hrs: 10:00 am - 5:30 pm</div>
      </div>
      <nav className="main-nav">
        <div className="ayush-logo">
          <img className="ayush_img" src={ayush_logo} alt="Ministry of AYUSH" />
        </div>
        <ul className="nav-links">
          <li>
            <button onClick={onhandleClick}>HOME</button>
          </li>
          <li>
            <button>GUIDELINES</button>
          </li>
          <li>
            <button>SCHEMES</button>
          </li>
          <li>
            <button>ABOUT</button>
          </li>
          <li>
            <button>CONTACT US</button>
          </li>
          <li>
            <button onClick={onhandlelogin}>LOGIN</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
