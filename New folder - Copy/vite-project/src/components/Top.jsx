import React from "react"
import gov_logo from '../assets/images/gov_logo.png';
import ayush_logo from '../assets/images/ayush_logo.png';
import ayurveda from '../assets/images/ayurveda.png';
export default function Top(){
    return(
        <header>
        <div className="top-bar">
            <div>
                <img className="Top1Img" src={gov_logo} alt="Government of India" />
                <img className="ayurvedaimg" src={ayurveda} alt="Ayurveda" />
            </div>
            <div className="Time">
                Working Hrs: 10:00 am - 5:30 pm
            </div>
        </div>
        <nav className="main-nav">
            <div className="ayush-logo">
                <img className="ayush_img" src={ayush_logo} alt="Ministry of AYUSH"/>
            </div>
            <ul className="nav-links">
                <li><a href="#">HOME</a></li>
                <li><a href="#">GUIDELINES</a></li>
                <li><a href="#">SCHEMES</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT US</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
        </nav>
        </header>
    )
}