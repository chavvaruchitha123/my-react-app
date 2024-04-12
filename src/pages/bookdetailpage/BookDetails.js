import React from "react";
import Navbar from "../../components/layout/navbar/Navbar";
import DetailSection from "../../components/layout/detail-section/DetailsSection";
// import Footer from '../../components/layout/footer/footer'

const BookDetails=()=>{
    return(
        <section>
            <Navbar darkTheme={true}/>  
                <DetailSection></DetailSection>
                {/* <Footer></Footer> */}
            
               </section>
    )
}
export default BookDetails