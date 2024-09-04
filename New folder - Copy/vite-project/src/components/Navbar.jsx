import React from "react"
import mainbg from "../assets/images/mainbg.png"
import PmImage from '../assets/images/PmImage.png';
export default function Navbar(){
    return(
            <>
            <img src={mainbg} className="MainBg"/>
            <div class="container">
                
                <div class="content-container">
                    <div class="first-container">
                        <h1>Empowering HealthTech <br/> Innovations Nationwide,</h1>
                        <p>Streamline your journey from idea to healthcare innovation.</p>
                    </div>
                    <div class="second-container">
                        <div class="text">
                            <p>Startups Registered: 159427<br/><br/>
                                Startups Approved: 6843<br/><br/>
                                Funds Provided: 41865651</p>
                        </div>
                        <div class="buttons">
                            <button class="button signup-btn">Sign Up Now</button>
                            <button class="button track-btn">Track Application Status</button>
                        </div>
                    </div>
                </div>
                <div class="img-container">
                    <img src={PmImage} />
                </div>
            </div>
            </>
     
    )
}