import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";

const Showcase=()=>{
    return(

<section className="showcase-container">
    <Navbar></Navbar>
    <div className="overlay"></div>
<div className="showcase-content">
    <h1>Best Books Available</h1>
    <p>Buy quality books at cheaper price</p>
</div>
</section>




    )
}
export default Showcase