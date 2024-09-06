import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import mainbg from "../assets/images/mainbg.png";
import PmImage from "../assets/images/PmImage.png";
import Top from "./Top";
import Foot from "./Foot";

export default function Navbar() {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <Top />
      <img src={mainbg} className="MainBg" />
      <div className="container">
        <div className="content-container">
          <div className="first-container">
            <h1>Empowering HealthTech Innovations Nationwide</h1>
            <p>Streamline your journey from idea to healthcare innovation.</p>
          </div>
          <div className="second-container">
            <div className="text">
              <p>Startups Registered: 159427</p>
              <p>Startups Approved: 6843</p>
              <p>Funds Provided: 41865651</p>
            </div>
            <div className="buttons">
              <button className="button signup-btn" onClick={handleSignUp}>
                Sign Up Now
              </button>
              <button className="button track-btn">
                Track Application Status
              </button>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src={PmImage} />
        </div>
      </div>
      <Foot />
    </>
  );
}
