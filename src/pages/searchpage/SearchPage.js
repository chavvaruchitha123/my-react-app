import React ,{useState,useEffect}from "react";
import { useLocation } from "react-router-dom";
import { BookData } from "../utils/BookData";
import Navbar from "../../components/layout/navbar/Navbar";
import SearchResultCard from "../../components/cards/search-result-card/SearchResultCard";
import './searchpage.styles.css';
import Footer from "../../components/layout/footer/footer";
const SearchPage=()=>{
    // <Footer></Footer>
    const  location=useLocation();
    const[SearchResult,SetSearchResult]=useState([])
       useEffect(()=>{
          let searchValue=[];
          searchValue=BookData.filter((data)=>data.book_name.toLowerCase().includes(location.state.toLowerCase()));
        SetSearchResult(searchValue);
    
    },[location.state])
    return(
        <section>
                <Navbar darkTheme={true}></Navbar>
                <div className="search-result-container">
                    <div className="container">
                    <h2>Your Search Result</h2>
                    {SearchResult.map((result)=>
                    <>
                        <SearchResultCard key={result.id}bookData={result}/>
                        {/* <Footer></Footer> */}
                        </>
                    )}
                    {/* <Footer></Footer> */}
                    </div>
                </div>
                <Footer></Footer>
        </section>
    )
}
{/* <Footer></Footer> */}
export default SearchPage