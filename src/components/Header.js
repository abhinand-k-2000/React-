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
        <div className="header flex justify-between items-center bg-slate-100">
            <div className="logo-container">
                <img className="logo w-20 rounded-3xl" src={LOGO_URI}></img>
            </div>
            <div className="nav-bar   ">
                <ul className="flex m-4 p-4">
                    <li className="px-3 "><Link to='/' style={{color: 'inherit', textDecoration: 'none'}}> Home </Link> </li>
                    <li className="px-3 "><Link to="/about" style={{color: 'inherit', textDecoration: 'none'}}> About Us </Link></li>
                    <li className="px-3 "><Link to="/contact" style={{color: 'inherit', textDecoration: 'none'}}> Contact Us </Link></li> 
                    <li className="px-3 mx-3 ">Cart</li>
                    <button type="button" className=" bg-green-400 px-3 py-2 rounded-lg"  onClick={() => {
                        // btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");  
                        setBtnName(btnName === "Login" ? "Logout" : "Login")              
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header  