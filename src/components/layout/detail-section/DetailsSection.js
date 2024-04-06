import React from "react";
import './detailsection.styles.css'
import BookDetailImg from '../../../assets/books-images/atomic-habits.jpg'
const DetailSection=()=>{
    return(
        <section className="detail-section-container">
            <div className="container">
                <div className="flex-container">
                    <div className="book-img-container">
                              <img src={BookDetailImg} alt="book"/>
                    </div>
                    <div className="book-details-container">
                              <h2> Atomic Habits</h2>
                                <p className="book-author">James Clear </p>
                                <p className="book-description"> Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones. Read the full summary to glean 3 key lessons from Atomic Habits, learn how to build a habit in 4 simple steps, and get a handy reference guide for the strategies recommended throughout the book.</p>
                                <p> <b>Language :</b>  English</p>
                                <p><b>Book Length :</b> 300 Pages</p>
                                <h3> &#8377; 420</h3>
                                <a href="#" className="cart-button">Add to cart</a>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default DetailSection