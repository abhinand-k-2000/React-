import  {LOGO_URI}  from "../utilities/constants"
import { useState} from "react"
import {Link} from "react-router-dom"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    console.log("header rendered")

    // useEffect(()=> {
    //     console.log("useEffect callded")
    // }, [btnName])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URI}></img>
            </div>
            <div className="nav-bar">
                <ul>
                    <li><Link to='/' style={{color: 'inherit', textDecoration: 'none'}}> Home </Link> </li>
                    <li><Link to="/about" style={{color: 'inherit', textDecoration: 'none'}}> About Us </Link></li>
                    <li><Link to="/contact" style={{color: 'inherit', textDecoration: 'none'}}> Contact Us </Link></li> 
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