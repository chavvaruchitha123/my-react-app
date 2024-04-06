import React from "react";
import './bookpage.styles.css'
import Navbar from "../../components/layout/navbar/Navbar";
import SearchInputForm from "../../components/forms/searchinputform/SearchinputForm";
import ProductListingAll from "../../components/layout/product-listing-all/productlistingall";
// import Footer from'../../components/layout/footer/footer';

const BooksPage=()=>{
    return(
        <section>
     
    <Navbar darkTheme={true}></Navbar>
    <div className="search-container">
        <h2>Find the books that you want </h2>
        <SearchInputForm darkTheme={false}></SearchInputForm>
    </div>
    <ProductListingAll></ProductListingAll>
    {/* <Footer></Footer> */}
        </section>
    )

}

export default BooksPage