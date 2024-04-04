import React from "react";
import './productlisting.styles.css'
import ProductImage from '../../../assets/books-images/jungle-book.jpg'
const ProductListing =()=>{
return(
    <div className="product-listing-container">  
    <div className="container">
        

    <h2>Here are the some <span className="text-primary">books</span> that you might like</h2>
    <div className="listing-container">
        <div className="product-listing-card">
            <div className="product-listing-img-container">
            <img src={ProductImage} alt="product-listing-image" className="product-listing-image"></img>
            </div>
            <div className="product-listing-details-container">
                <h3>Book Name</h3>
                <p className="author-name">Author Name</p>
                <p className="pricing"> &#8377;  300</p>
                <a href="#" >Button</a>
            </div>
        </div>
    </div>
    </div>
         
    </div>
)
}
export default ProductListing
