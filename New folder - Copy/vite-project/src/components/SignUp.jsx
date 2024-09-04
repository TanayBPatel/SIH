import React from "react"
import mainbg from '../assets/images/mainbg.png';
export default function SignUp(){
    return(
        <div className="body2">
      <img  className="Main" src={mainbg}/>
  <div className="Total">
      <h1>ACCOUNT REGISTRATION</h1>
   
      <div className="MainBox">
        <div className="LeftBox">
          <pr>First Name*</pr><br/>
           <input type="text" /><br/><br/>
          <pr>Email ID*</pr><br/>
             <input type="text"/><br/><br/>
          <pr>Password*</pr><br/>
               <input type="text"/>
        </div>
        <div className="RightBox">
        <pr>First Name*</pr><br/>
           <input type="text"/><br/><br/>
          <pr>Email ID*</pr><br/>
             <input type="text"/><br/><br/>
          <pr>Password*</pr><br/>
               <input type="text"/>
         </div>
               </div>
             <div className="Sign">
           <button>
            SIGN UP
           </button>
             </div>
        </div>
        </div>

    
    )}