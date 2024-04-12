import React from "react";
import './productlisting.styles.css';
import ProductListingCard from "../../cards/productlistingcard/productlistingcard";
import { BookData } from "../../../pages/utils/BookData";

const ProductListing =()=>{
return(
    <div className="product-listing-container">  
    <div className="container">
        

    <h2>Here are the some <span className="text-primary">books</span> that you might like</h2>
    <div className="listing-container">
        {BookData.slice(0,4).map((book)=>(
            <ProductListingCard  key={book.id} bookData={book}></ProductListingCard>
        ))}




    </div>
    </div>
         
    </div>
)
}
export default ProductListing
