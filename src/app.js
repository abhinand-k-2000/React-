
import React from "react";
import ReactDOM from "react-dom/client";  

import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body";
import Counter from "./components/Counter"; 

const root = ReactDOM.createRoot(document.getElementById("root"))


const AppLayout = () => {
    return (
        <div>
            <Header />
            {/* <Counter /> */}
            <Body />
            <Footer /> 
        </div>
    )
}

root.render(<AppLayout/>)    
