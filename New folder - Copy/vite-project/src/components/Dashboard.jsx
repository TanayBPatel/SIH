import React from "react";
import mainbg from "../assets/images/mainbg.png";
import dashboard from "../assets/images/dashboard.png";
import usericon from "../assets/images/usericon.png";
import Application from "../assets/images/Application.png";
import NewApplication from "../assets/images/NewApplication.png";
import grievances from "../assets/images/grievances.png";
import logout from "../assets/images/logout.png";
import Top from "./Top";
import Foot from "./Foot";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  const handlemyacc = () => {
    navigate("/myaccount");
  };

  return (
    <>
      <Top />
      <div className="body3">
        <img className="Main" src={mainbg} />
        <div className="sidebar">
          <div onClick={handleDashboard}>
            <img className="iconsdash" src={dashboard} />
            <strong>DASHBOARD</strong>
          </div>
          <div onClick={handlemyacc}>
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
        <div className="DashTotal">
          <h1>ALERTS</h1>
          <ul>
            <li>Loda</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="DashTotal">
          <h1>UPDATES</h1>
          <ul>
            <li>Lasan</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
      <Foot />
    </>
  );
}
