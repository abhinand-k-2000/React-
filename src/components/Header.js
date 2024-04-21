import { LOGO_URI } from "../utilities/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utilities/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utilities/appStore";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitem", cartItems);

  return (
    <div className="header flex justify-between items-center bg-slate-100">
      <Link to="/">
        <div className="logo-container">
          <img className="logo w-20 rounded-3xl" src={LOGO_URI}></img>
        </div>
      </Link>
      <div className="nav-bar   ">
        <ul className="flex m-4 p-4">
          <li className="px-3 ">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              {" "}
              Home{" "}
            </Link>{" "}
          </li>
          <li className="px-3 ">
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              About Us{" "}
            </Link>
          </li>
          <li className="px-3 ">
            <Link
              to="/contact"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              Contact Us{" "}
            </Link>
          </li>
          <Link
            to="/cart"
          >
            <li className="px-3 mx-3 ">
              <span className="font-bold">Cart</span> - ({cartItems.length}{" "}
              items)
            </li>
          </Link>

          <li>
            <button
              type="button"
              className=" bg-green-400 px-3 py-2 rounded-lg"
              onClick={() => {
                // btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-3 mx-3 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
