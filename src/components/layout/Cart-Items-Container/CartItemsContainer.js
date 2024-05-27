 import React,{useContext} from "react";
import './cart-items-container.styles.css';
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import {CartContext} from '../../../App';
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const CartItemsContainer=()=>{
    const {cartItems,totalAmount}=useContext(CartContext)
    const stripeKey="pk_test_51PKl4oSCxuYMlANd8rPLbB6R3GlZwWEmWeFcJnAEvZTipj5QlXSXui9gdQ529YTrR2bJuAK3zXPEibyOaJ5Zbein0067vGte9B"
   const navigate =useNavigate();
    const  ontoken=(token)=>{
    console.log(token)
    alert("Your Payment has been Processed")
    navigate('/books')

   }
 
    // console.log(cartItems)
    return(
        <section className="cart-items-container">
            <div className="container">
                {totalAmount === 0 ? (
                          <h2>Currently your cart is empty</h2>
                ):(
                    <React.Fragment>
                        <h2>Cart</h2>
                          {cartItems.map((item)=>(
                            <CartItemCard key={item.id} bookData={item}/>
                          ))}
                    <h2>Total Amount = &#8377; {totalAmount}</h2>
                    {/* <button className="button-primary">Proceed to checkout</button> */}
                    <StripeCheckout
                             name="Book Checkout"
                             description="Please fill in the details below"
                             amount={totalAmount*100}
                             currency="INR"
                            stripeKey={stripeKey}
                            token={ontoken}
                            billingAddress
                    >
                      <button className="button-primary">Proceed to checkout</button>
                      </StripeCheckout>
                    </React.Fragment>

                )}
                {/* <h2>Cart</h2>
                          {cartItems.map((item)=>(
                            <CartItemCard key={item.id} bookData={item}/>
                          ))}
                    <h2>Total Amount = &#8377; {totalAmount}</h2>
                    <button className="button-primary">Proceed to checkout</button> */}

            </div>
        </section>
    )
}
export default CartItemsContainer