import React from "react"
import logo from "../Images/Logo.png"

function Header(){
    return(
    <div className="header">
    <img className="header-pic-left"src={logo} alt="logo"/>
    <div className="header-text">
        <h1>Team NEW SUN</h1>
        <h5>Estd:2019</h5>
        <h4>Belgharia.Kolkata-56</h4>
        <h3>"Helping preserves the places you cherish."</h3>
    </div>
    <img className="header-pic-right"src={logo} alt="logo" />
    </div>
    )
}
export default Header