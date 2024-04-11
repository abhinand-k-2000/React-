
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom"
import { MENU_URI } from "../utilities/constants";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams()
    console.log(resId)
    
    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () =>{
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.1556686&lng=75.891155&restaurantId=307926&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
        const data = await fetch(MENU_URI + resId)
        const json = await data.json();
        // console.log("hey", json?.data?.cards[2]?.card?.card?.info)
        // const menu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards)
        console.log(json.data)
        setResInfo(json.data) 
    }

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    console.log("cards", itemCards) 
      
    return (
        <div>
            <h1> Name: {name}</h1>
            <h4>Cuisines: {cuisines.join(', ')}</h4>
            <h2> Menu </h2>
            <ul>
                {
                    itemCards.map((item) => 
                     <li key={item.card.info.id}>
                    {item?.card?.info?.name} --{"  "} Rs. {item?.card?.info?.price/100}
                    </li>)
                }
            </ul>
        </div>
    )
}


export default RestaurantMenu;