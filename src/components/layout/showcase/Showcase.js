import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchinputform/SearchinputForm";

const Showcase=()=>{
    return(

<section className="showcase-container">
    <Navbar darkTheme={false}></Navbar>
    <div className="overlay"></div>
<div className="showcase-content">
    <h1>Best <span className="text-primary">Books</span> Available</h1>
    <p>Buy quality books at cheaper price</p>
    <SearchInputForm darkTheme={true}></SearchInputForm>
</div>

</section>




    )
}
export default Showcase