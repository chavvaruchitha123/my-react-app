import React,{useContext} from "react";
import './cart-item-card.styles.css';
import { CartContext } from "../../../App";



const CartItemCard=({bookData})=>{
    const {cartItems,setcartItems}=useContext(CartContext)
    const handleRemove=()=>{
        console.log(bookData.id);
        setcartItems(cartItems.filter((item)=>item.id !==bookData.id));
    }
    return(
        
                <section className="cart-items">
                    <div className="cart-items-img-container">
                           <img src={bookData.book_url} alt="cart-items-img" className="cart-item-img"/>
                    </div>
                    <div className="cart-item-content-container">
                        <h2>{bookData.book_name}</h2>
                        <p>{bookData.author_name}</p>
                        <h3 className="cart-item-price">&#8377;  {bookData.price}</h3>
                        <button onClick={handleRemove} className="delete_btn">Remove From Cart</button>
                    </div>
                </section>
        
    )
}
export default CartItemCard