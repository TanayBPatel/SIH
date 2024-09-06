import React from "react";
import mainbg from "../assets/images/mainbg.png";
import { useNavigate } from "react-router-dom";
import Top from "./Top";
import Foot from "./Foot";

export default function SignUp() {
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <Top />
      <div className="body2">
        <img className="Main" src={mainbg} />
        <div className="Total">
          <h1>ACCOUNT REGISTRATION</h1>

          <div className="MainBox">
            <div className="LeftBox">
              <pr>First Name*</pr>
              <br />
              <input type="text" />
              <br />
              <br />
              <pr>Email ID*</pr>
              <br />
              <input type="text" />
              <br />
              <br />
              <pr>Password*</pr>
              <br />
              <input type="text" />
            </div>
            <div className="RightBox">
              <pr>First Name*</pr>
              <br />
              <input type="text" />
              <br />
              <br />
              <pr>Email ID*</pr>
              <br />
              <input type="text" />
              <br />
              <br />
              <pr>Password*</pr>
              <br />
              <input type="text" />
            </div>
          </div>
          <div className="Sign">
            <button onClick={handleDashboard}>SIGN UP</button>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}
