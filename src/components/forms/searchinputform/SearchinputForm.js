import React,{useState} from "react";

import { useNavigate } from "react-router-dom";
import './SearchinputForm.styles.css'
import { redirect } from "react-router-dom";
const SearchInputForm=({darkTheme})=>{
    const[searchField,setSearchField]=useState("");
    const navigate =useNavigate()
    const handleChange=(e)=>{
        setSearchField(e.target.value);
        // console.log(e.target.value)
    }




    const redirectToSearch=()=>{
            //    navigate('/search',{state:searchField})
            if(searchField===''){
                alert("Searchfield is Empty")
            }else{
               navigate('/search',{state:searchField})

            }
    }
    return(
        <div className={`search-input-form-container ${darkTheme?'dark-box-shadow':'light-box-shadow'}`}>
               <input 
               type="text" 
               className="search-input" 
               placeholder="Search Books"
               value={searchField}
               onChange={handleChange}
               />
               <button  onClick={redirectToSearch}className="search-button">Search</button>
        </div>
    )
}
export default SearchInputForm