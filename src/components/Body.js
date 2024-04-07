import RestCard from "./RestCard";
// import restaurants from "../utilities/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const [searchData, setSearchData] = useState("")

  useEffect(()=> {
    fetchData();
  }, [])
      
  async function fetchData () {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.21890&lng=75.72680&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurant(restaurants)
    setFilteredRestaurants(restaurants)
  } 
 
 
  

  if(listOfRestaurant.length === 0){
    return <Shimmer />
  }

  return (
    <div className="body-container">
      <div className="search">

        <input type="text" value={searchData} onChange={(e)=>{
          setSearchData(e.target.value)
        }}/>

        <button className="search-btn" onClick={()=> {
        const filteredRestaurants = listOfRestaurant.filter((rest)=> rest.info.name.toLowerCase().includes(searchData.toLowerCase()))
        setFilteredRestaurants(filteredRestaurants)

        }}>search</button>
      
      
        <button       
          className="filter-btn"
          onClick={() => {     
            const filteredList = listOfRestaurant.filter(
              (rest) => rest.info.avgRating >= 4.2
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated{" "}
        </button>

        </div>
      <div className="rest-container">
        {filteredRestaurants.map((restaurant) => {
          return <RestCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};



export default Body;
