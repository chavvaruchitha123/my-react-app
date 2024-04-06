import React from "react";
import Showcase from "../../components/layout/showcase/Showcase";
import ProductListing from "../../components/layout/product-listing/productlisting";
import Footer from "../../components/layout/footer/footer";
const HomePage=()=>{
    return(
        <div>
        <section>
            <Showcase></Showcase>
        <ProductListing></ProductListing>
        <Footer></Footer>
        </section>
        </div>
    )
}
export default HomePage