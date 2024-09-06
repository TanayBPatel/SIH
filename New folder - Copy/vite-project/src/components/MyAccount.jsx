import React from "react";
import mainbg from "../assets/images/mainbg.png";
import dashboard from "../assets/images/dashboard.png";
import usericon from "../assets/images/usericon.png";
import Application from "../assets/images/Application.png";
import NewApplication from "../assets/images/NewApplication.png";
import grievances from "../assets/images/grievances.png";
import logout from "../assets/images/logout.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import Name from "../assets/images/Name.png";
import Top from "./Top";
import Foot from "./Foot";
export default function MyAccount() {
  return (
    <>
      <Top />
      <div className="body3">
        <img className="Main" src={mainbg} />
        <div className="sidebar">
          <div>
            <img className="iconsdash" src={dashboard} />
            <strong>DASHBOARD</strong>
          </div>
          <div>
            <img className="iconsdash" src={usericon} />
            <strong>MY ACCOUNT</strong>
          </div>
          <div>
            <img className="iconsdash" src={Application} />
            <strong>APLLICATION</strong>
          </div>
          <div>
            <img className="iconsdash" src={NewApplication} />
            <strong>NEW APPLICATION</strong>
          </div>
          <div>
            <img className="iconsdash" src={grievances} />
            <strong>GRIEVANCES</strong>
          </div>
          <div>
            <img className="iconsdash" src={logout} />
            <strong>LOG OUT</strong>
          </div>
        </div>
        <div className="AccTotal">
          <h1>ACCOUNT DETAILS</h1>
          <div className="enteracc">
            <div>
              <img src={Name} />
            </div>
            <div>
              <p>Name</p>
            </div>
            <div>
              <input
                type="text"
                class="underline-input"
                placeholder="Type something..."
              />
            </div>
          </div>
          <div className="enteracc">
            <div>
              <img src={email} />
            </div>
            <div>
              <p>Email ID</p>
            </div>
            <div>
              <input
                type="text"
                class="underline-input"
                placeholder="Type something..."
              />
            </div>
          </div>
          <div className="enteracc">
            <div>
              <img src={phone} />
            </div>
            <div>
              <p>Contact Number</p>
            </div>
            <div>
              <input
                type="text"
                class="underline-input"
                placeholder="Type something..."
              />
            </div>
          </div>
          <div className="block">
            <div className="Sign">
              <button>Change Account Details</button>
            </div>
            <div className="Sign">
              <button>Reset Password</button>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}
