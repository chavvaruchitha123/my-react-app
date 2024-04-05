import React from "react";
import './bookpage.styles.css'
import Navbar from "../../components/layout/navbar/Navbar";
import SearchInputForm from "../../components/forms/searchinputform/SearchinputForm";
const BooksPage=()=>{
    return(
        <section>
     
    <Navbar darkTheme={true}></Navbar>
    <div className="search-container">
        <h2>Find the books that you want </h2>
        <SearchInputForm darkTheme={false}></SearchInputForm>
    </div>
        </section>
    )

}

export default BooksPage