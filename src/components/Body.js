import RestCard from "./RestCard";
import restaurants from "../utilities/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurants);

 

  return (
    <div className="body-container">
      <div className="search">
        <button       
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (rest) => rest.info.avgRating >= 4.2
            );
            {
              console.log("sot", filteredList);
            }
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated{" "}
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurant.map((restaurant) => {
          return <RestCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
