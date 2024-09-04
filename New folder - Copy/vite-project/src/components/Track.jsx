import React from "react";
import mainbg from "../assets/images/mainbg.png";
import lock from "../assets/images/lock.png";
import usericon from "../assets/images/usericon.png";
export default function Track() {
  return (
    <div className="body2">
      <img className="Main" src={mainbg} />
      <div className="Total" id="WelcomeTotal">
        <h1 className="Welcome">TRACK YOUR APPLICATION STATUS</h1>
        <div class="input-container">
          <strong>Application ID</strong>
          <br />
          <br />
          <input type="text" placeholder="Enter Your Application ID" />
          <img src={usericon} alt="Search Icon" class="input-icon" />
        </div>
        <br />
        <br />

        <div className="Sign">
          <button>TRACT STATUS</button>
        </div>
      </div>
    </div>
  );
}
