import React,{useContext} from "react";
import './searchresultcard.styles.css';
import { Link } from "react-router-dom";
const SearchResultCard=({bookData})=>{
      
    
    return(
           <section className="cart-items">
                    <div className="cart-items-img-container">
                           <img src={bookData.book_url} alt="cart-items-img" className="cart-item-img"/>
                    </div>
                    <div className="cart-item-content-container">
                        <h2>{bookData.book_name}</h2>
                        <p>{bookData.author_name}</p>
                        {/* <h3 className="cart-item-price">&#8377;  {bookData.price}</h3> */}
                        <Link to={`/book-details/${bookData.id}`} className="button-primary">Product Details</Link>
                        
                    </div>
                </section>
        
    )
}
export default  SearchResultCard