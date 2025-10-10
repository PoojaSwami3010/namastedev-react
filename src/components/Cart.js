import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart=()=>{

    const cartItem=useSelector((store)=>store.cart.items)
    console.log("carts items in carts page",cartItem)

    const dispatch=useDispatch();

   const handlecleraCart=()=>{
    dispatch(clearCart())

   }

    return <div className="text-center p-4 m-4">
       <h1 className="text-xl font-bold">Cart</h1> 
       <div>
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handlecleraCart}>Clear cart</button>
       { cartItem.length===0 && <h1>Cart is empty add items to the cart !!</h1>}
       {cartItem.length ? <ItemList  items={cartItem}/>: ''}
       </div>
    </div>
}

export default Cart;