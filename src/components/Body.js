import RestCard, { withPromotedLabe } from "./RestCard";
// import restaurants from "../utilities/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utilities/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const {loggedInUser, setUserName} = useContext(UserContext)

  const [searchData, setSearchData] = useState("");

  const RestCardPromoted = withPromotedLabe(RestCard);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.21890&lng=75.72680&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING")
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.1556686&lng=75.891155&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.1556686&lng=75.891155&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      // const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setListOfRestaurant(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.log(error);
    }
  }

  // if(listOfRestaurant.length === 0){
  //   return <Shimmer />
  // }

  if (!listOfRestaurant || listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="search">
        <input
          type="text"
          className="p-1 m-3 border-2 rounded-lg border-rose-500"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />

        <button
          className="search-btn bg-orange-300 px-3 py-2 rounded-lg"
          onClick={() => {
            const filteredRestaurants = listOfRestaurant.filter((rest) =>
              rest.info.name.toLowerCase().includes(searchData.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          search
        </button>

        <button
          className="filter-btn m-5 bg-blue-500 px-3 py-2 rounded-lg text-white"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (rest) => rest.info.avgRating >= 4.2
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Resatuarants
        </button>
 
          <label>Change User Name: </label>
          <input type="text" className="border border-black" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}></input>

      </div>


      <div className="rest-container flex flex-wrap p-3 m-3">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {
              restaurant.info.avgRating>=4.4 ? <RestCardPromoted resData={restaurant}/> : <RestCard resData={restaurant} />
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
