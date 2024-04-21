import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilities/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)
    console.log("uSER", cartItems)
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center w-1/2 mx-auto">
            <div className=" flex justify-between items-center">
            <h1 className="font-bold py-4 m-4 text-center">CART</h1>
            <button onClick={handleClearCart} className="bg-black text-white px-2 rounded-md ml-auto">Clear Cart</button>
            </div>
             <ItemList items={cartItems}/>
        </div>  
    )
}

export default Cart;