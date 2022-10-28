import React from "react";
import fb from "../Images/fb.png"
import insta from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
function Footer(){
   return(
    <div className="footer">
        <hr></hr>
          <ul className="socials" >
            <li className="ms-3" ><a className="link-dark" href="#"><img className="visible" width="24" height="24" src={fb}/></a></li>
            <li className="ms-3" ><a className="link-dark" href="#" ><img className="visible" width="30" height="30"  src={insta}/></a></li>
            <li className="ms-3" ><a className="link-dark" href="#" ><img className="visible" width="30" height="30"  src={twitter}/></a></li>
          </ul>
        </div>
   )
}
export default Footer