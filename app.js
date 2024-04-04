
import React from "react";
import ReactDOM from "react-dom/client";  

const root = ReactDOM.createRoot(document.getElementById("root"))


// //jsx
// const heading = <p id="heading">Welcome</p>

// console.log(heading)

const elem = (
    <h3>This ia an element {typeof num}</h3>
    
)

var num = 10;

const Heading = () => {
   
    return (
        <div>
    <h1 className="heading">This is a functional component</h1>
    <h5>{num}</h5>
    </div>
    )
}

const ChildComponent = () => {
    return (
        <p> This is from child component</p>
    )
}

const ParentComponent = () => (
    <div className="container">
        <Heading/>
        {ChildComponent()}
        {<ChildComponent></ChildComponent>}
        {<ChildComponent />}
        <p className="para">This is the parent</p>
        {elem}
        {num}
    </div>
)

root.render(<ParentComponent/>)    
