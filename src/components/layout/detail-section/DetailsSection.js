import React ,{useState,useEffect,useContext}from "react";
import './detailsection.styles.css'
import BookDetailImg from '../../../assets/books-images/atomic-habits.jpg'
import {useParams,useNavigate} from 'react-router-dom'
import { BookData } from "../../../pages/utils/BookData";
import { CartContext, UserContext } from "../../../App";


const DetailSection=()=>{
    const {id} =useParams();
    const[bookData,setBookData]=useState({});

     const user=useContext(UserContext)
     const {cartItems,setcartItems}=useContext(CartContext)
     const navigate=useNavigate()
      
    useEffect(()=>{
            let newData=BookData.filter((book)=>book.id==parseInt(id));
             
            setBookData(newData[0]);
            
    },[])




    const handleAddToCart=()=>{
    if(user){
        //add to cart
        setcartItems([...cartItems,bookData]);
        alert(`The book ${bookData.book_name} is added to the cart `)
    }
    else{
           navigate("/signup")
           alert("please login or signup")
    }
    }
    return(
        <section className="detail-section-container">
            <div className="container">
                <div className="flex-container">
                    <div className="book-img-container">
                              <img src={bookData.book_url} alt="book"/>
                    </div>
                    <div className="book-details-container">
                              <h2> {bookData.book_name}</h2>
                                <p className="book-author">{bookData.author_name} </p>
                                <p className="book-description"> {bookData.book_description}</p>
                                <p> <b>Language :</b> {bookData.language}</p>
                                <p><b>Book Length :</b>{bookData.print_length}</p>
                                <h3> &#8377; {bookData.price}</h3>
                                <a onClick={handleAddToCart} className="button-primary">Add to cart</a>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default DetailSection