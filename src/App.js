import React from "react";
import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BookPage";
import BookDetails from "./pages/bookdetailpage/BookDetails";
const App=()=>{
    return(
        <div>
            <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/books" element={<BooksPage   />}/>
            <Route path="/book-details/:id" element={<BookDetails/>}/>
            </Routes>
        </div>
    )
}
export default App