
import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"; 
import  {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utilities/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilities/appStore";
import Cart from "./components/Cart";



const root = ReactDOM.createRoot(document.getElementById("root"))

const AppLayout = () => {

    const [userName, setUserName] = useState(null)

    useEffect(()=> {
        const data = {
            name: "Abhinand"
        }
        setUserName(data.name)

    },[])

    return (
        <div>
            <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <Header />
            <Outlet />
            </UserContext.Provider>
            <Footer /> 
            </Provider>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/', 
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
            }, 
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ],
        errorElement: <Error />

    }, 
    
])





root.render( <RouterProvider router={router}/>)    
