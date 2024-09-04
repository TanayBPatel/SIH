import React from "react";
import mainbg from "../assets/images/mainbg.png";
import lock from "../assets/images/lock.png";
import usericon from "../assets/images/usericon.png";
export default function Welcome() {
  return (
    <div className="body2">
      <img className="Main" src={mainbg} />
      <div className="Total" id="WelcomeTotal">
        <h1 className="Welcome">Welcome Back!!!</h1>
        <div class="input-container">
          <strong>Email ID</strong>
          <br />
          <br />
          <input type="text" placeholder="UserName" />
          <img src={usericon} alt="Search Icon" class="input-icon" />
        </div>
        <br />
        <br />
        <div class="input-container">
          <strong>Password</strong>
          <br />
          <br />
          <input type="text" placeholder="Lock" />
          <img src={lock} alt="Search Icon" class="input-icon" />
        </div>

        <div className="Sign">
          <button>LOG IN</button>
        </div>

        <div className="createacc">Create Account</div>
      </div>
    </div>
  );
}
