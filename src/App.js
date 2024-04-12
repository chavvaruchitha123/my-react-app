import React ,{useState,useEffect,createContext} from "react";
import { Routes,Route } from "react-router-dom";
import app from "./firebase/firebase";
import{getAuth,onAuthStateChanged} from 'firebase/auth';

import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BookPage";
import CartPage from "./pages/cartpage/CartPage";
import BookDetails from "./pages/bookdetailpage/BookDetails";
import Login from "./pages/loginpage/login";
import Signup from "./pages/signuppage/signup";

 export const UserContext=createContext({})
 export const CartContext=createContext({})

const App=()=>{
    const auth=getAuth(app);
    const [authenticateduser,setAuthenticated]=useState(null)
    const[cartItems,setcartItems]=useState([]);
    

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
              if(user){
            setAuthenticated(user)
              }
              else{
                setAuthenticated(null)
              }
        
        })     
    },[])
    // useEffect(()=>{
    //       console.log(cartItems)
    // },[cartItems])
    return(
        <UserContext.Provider value={authenticateduser}>
          <CartContext.Provider value={{cartItems,setcartItems}}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/books" element={<BooksPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>

            <Route path="/book-details/:id" element={<BookDetails/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>
            </Routes>
            
          </CartContext.Provider>
            
            
        </UserContext.Provider>
    )
}
export default App