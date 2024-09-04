import React from "react"
// import phonesolid from '../assets/images/photosolid.png';
export default function Foot(){
    return(
        <footer>
             <div class="info-bar">
                <hr/>
                <div className="Feedback">
                    <button  className="FeedbackButton">Feedback</button>
                </div>
                <div className="Location">
                    <p><strong>Location</strong></p> 
                    <p>Ayush Bhawan, B Block, GPO Complex, INA, New Delhi - 110023</p>
                </div>
                <div className="Query">
                    <p><strong>For Query</strong></p>
                    <p> 011-24648354 </p>
                    <p> support-moayush@nic.in</p>
                </div>
                <div>
                    <p>Startup Guide </p>
                    <p>Webinars And Events</p>
                    <p>Blog </p>
                </div>
                <div>
                    <p>FAQs </p>
                    <p>Insights</p>
                    <p>Legal </p>

                </div>
                <div>
                    <p>Terms of Use </p>
                    <p>Privacy Policy</p>
                    <p>Site Map </p>
                </div>
            </div>
            <div className="BottomFoot">
                <div class="Date">
                    <p>Last Updated: 25th Aug 2024</p>
                </div>
                <div class="social-media">

                    <span>FOLLOW US:</span>
                    <button>
                        <img/>
                    </button>
                    <button>
                        <img/>
                    </button>
                    <button>
                        <img/>
                    </button>
                        <img/>
                    <button>
                        <img/>
                    </button>
                    <button>
                        <img/>
                    </button>
                    
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2024 MedStartup. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}