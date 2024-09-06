import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import mainbg from "../assets/images/mainbg.png";
import lock from "../assets/images/lock.png";
import usericon from "../assets/images/usericon.png";
import Top from "./Top";
import Foot from "./Foot";

export default function Welcome() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    navigate("/dashboard"); // Navigate to Dashboard page after login
  };
  const handlesignup = () => {
    navigate("/signup"); // Navigate to Dashboard page after login
  };

  return (
    <>
      <Top />
      <div className="body2">
        <img className="Main" src={mainbg} />
        <div className="Total" id="WelcomeTotal">
          <h1 className="Welcome">Welcome Back!!!</h1>

          <div class="input-container">
            <strong>Email ID</strong>
            <br />
            <br />
            <input type="text" placeholder="UserName" />
            <img src={usericon} alt="User Icon" class="input-icon" />
          </div>
          <br />
          <br />
          <div class="input-container">
            <strong>Password</strong>
            <br />
            <br />
            <input type="text" placeholder="Lock" />
            <img src={lock} alt="Lock Icon" class="input-icon" />
          </div>

          <div className="Sign">
            <button onClick={handleLogin}>LOG IN</button>{" "}
            {/* Add onClick for navigation */}
          </div>
          <div className="createacc" onClick={handlesignup}>
            Create Account
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}
