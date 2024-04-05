import React from "react";
import'./productlistingcard.styles.css';
import ProductImage from '../../../assets/books-images/jungle-book.jpg'

const ProductListingCard=()=>{
    return(
       < div className="product-listing-card">
            <div className="product-listing-img-container">
            <img src={ProductImage} alt="product-listing-image" className="product-listing-image"></img>
            </div>
            <div className="product-listing-details-container">
                <h3>The Jungle Book</h3>
                <p className="author-name">Rudyard  Kipling</p>
                <p className="pricing"> &#8377;  300</p>
                <a href="#"  className="product-listing-button">Button</a>
            </div>
        </div>
    )
}
export default  ProductListingCard