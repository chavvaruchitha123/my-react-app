import React from "react";
import './productlistingall.styles.css'
import ProductListingCard from "../../cards/productlistingcard/productlistingcard";
const ProductListingAll=()=>{
    return(
        <section className="product-listing-all-container">
            <div className="container">
                <div className="grid-container">
                    <div className="grid-items">
                          <ProductListingCard></ProductListingCard>
                    </div>
                    <div className="grid-items">
                          <ProductListingCard></ProductListingCard>
                    </div>
                    <div className="grid-items">
                          <ProductListingCard></ProductListingCard>
                    </div>
                    <div className="grid-items">
                          <ProductListingCard></ProductListingCard>
                    </div>
                    <div className="grid-items">
                          <ProductListingCard></ProductListingCard>
                    </div>
                    <div className="grid-items">
                          <ProductListingCard></ProductListingCard>
                    </div>
                    <div className="grid-items">
                          <ProductListingCard></ProductListingCard>
                    </div>
                    <div className="grid-items">
                          <ProductListingCard></ProductListingCard>
                    </div>
                    <div className="grid-items">
                          <ProductListingCard></ProductListingCard>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductListingAll;