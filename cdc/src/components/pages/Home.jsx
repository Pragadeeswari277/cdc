import React from "react";
import Contact from "../Contacts";

import CoverflowSlider from "../CoverflowSlider";
export const Home = ()=>{
    return(
        <div className="container center">
      
      <h3 className="welcome" >WELCOME TO COIMBATORE DERMAL CENTRE</h3>
       
     <CoverflowSlider/>
      <Contact/>
      
        </div>
    )
        
    
}