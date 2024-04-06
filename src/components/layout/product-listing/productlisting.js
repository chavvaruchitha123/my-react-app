import React from "react";
import './productlisting.styles.css';
import ProductListingCard from "../../cards/productlistingcard/productlistingcard";

const ProductListing =()=>{
return(
    <div className="product-listing-container">  
    <div className="container">
        

    <h2>Here are the some <span className="text-primary">books</span> that you might like</h2>
    <div className="listing-container">
        

<ProductListingCard></ProductListingCard>
<ProductListingCard></ProductListingCard>
<ProductListingCard></ProductListingCard>
<ProductListingCard></ProductListingCard>
        



    </div>
    </div>
         
    </div>
)
}
export default ProductListing
