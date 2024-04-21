import React from "react";
import { IMG_URI } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utilities/cartSlice";

const ItemList = ({ items }) => {
  // console.log("items", items);
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }


  return (
    <div className="">
      {items.map((item) => (
        <div key={item.card.info.id} className="text-left m-2 p-2 relative text-xs border-gray-400 border-b-2 flex justify-between">
          <div>
          <p>{item?.card?.info?.name}</p>
          <p>Rs. {item?.card?.info?.price / 100}</p>
          </div>
          <div>
            <img className="w-36 rounded-lg" alt="photo" src={IMG_URI + item.card.info.imageId} />
            <button onClick={()=> handleAddItem(item)} className="absolute bg-white p-2 rounded-md bottom-2">Add ➕</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
