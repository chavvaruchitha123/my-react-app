import React from "react";
import Showcase from "../../components/layout/showcase/Showcase";
import ProductListing from "../../components/layout/productlisting/productlisting";
// import ProductListing from "../../components/layout/productlisting/productlisting";
const HomePage=()=>{
    return(
        <div>
        <section>
            <Showcase></Showcase>
        <ProductListing></ProductListing>
        </section>
        </div>
    )
}
export default HomePage