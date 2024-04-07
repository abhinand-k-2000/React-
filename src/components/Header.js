import  {LOGO_URI}  from "../utilities/constants"
import {useState} from "react"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    console.log("rendere")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URI}></img>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        // btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");  
                        setBtnName(btnName === "Login" ? "Logout" : "Login")              
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header  