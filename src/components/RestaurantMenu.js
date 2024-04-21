import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useAsyncError, useParams } from "react-router-dom";
import { MENU_URI } from "../utilities/constants";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.1556686&lng=75.891155&restaurantId=307926&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
    const data = await fetch(MENU_URI + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center p-3">
      <h3 className="font-bold text-2xl my-4 bg-slate-50 w-1/2 mx-auto shadow-lg py-3">
        {resInfo?.cards[0]?.card?.card?.text}
      </h3>
      {categories.map((category, index) => (
        <ResCategory
          key={category?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
