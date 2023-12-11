import React from "react";
import Contact from "../Contacts";

import CoverflowSlider from "../CoverflowSlider";
export const Home = ()=>{
    return(
        <div className="center">
      
      <h3 className="welcome" >WELCOME TO THE COIMBATORE DERMAL CENTRE</h3>
       <div >
     <CoverflowSlider/>
     </div>
      <Contact/>
      
        </div>
    )
        
    
}