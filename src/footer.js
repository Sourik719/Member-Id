import React from "react"
import fb from "./Images/fb.png"
import insta from "./Images/instagram.png"
import twitter from "./Images/twitter.png"

function Sourik(){
    return(
        <div>
          <hr/>
        <div className="footer">
        <div className="col-md-1"></div>
        <div className="footertext">
          <p className="col-md-10" >© 2022 Company, Inc. All rights reserved.</p>
        </div>
        <div className="col-md-1">
          <ul className="socials" >
            <li className="ms-3" ><a className="link-dark" href="query.html"><img className="visible" width="24" height="24" src={fb}/></a></li>
            <li className="ms-3" ><a className="link-dark" href="#" ><img className="visible" width="30" height="30"  src={insta}/></a></li>
            <li className="ms-3" ><a className="link-dark" href="#" ><img className="visible" width="30" height="30"  src={twitter}/></a></li>
            
          </ul>
          
        </div>
  
      </div>
      </div>
    )
}
export default Sourik
