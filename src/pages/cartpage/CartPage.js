import React from "react";
import Navbar from "../../components/layout/navbar/Navbar";
// import Footer from "../../components/layout/footer/footer";
import CartItemsContainer from "../../components/layout/Cart-Items-Container/CartItemsContainer";
const CartPage =()=>{
    return(
        <section >
            <Navbar darkTheme={true}></Navbar>
            <CartItemsContainer></CartItemsContainer>
            {/* <Footer></Footer> */}
        </section>
    )
}
export default CartPage