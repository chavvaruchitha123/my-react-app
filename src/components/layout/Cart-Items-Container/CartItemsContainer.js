import React,{useContext} from "react";
import './cart-items-container.styles.css';
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import {CartContext} from '../../../App';

const CartItemsContainer=()=>{
    const {cartItems}=useContext(CartContext)
    console.log(cartItems)
    return(
        <section className="cart-items-container">
            <div className="container">
                <h2>Cart</h2>
                          {cartItems.map((item)=>(
                            <CartItemCard key={item.id} bookData={item}/>
                          ))}
            </div>
        </section>
    )
}
export default CartItemsContainer