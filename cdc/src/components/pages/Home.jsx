import React from "react";
import Contact from "../Contacts";
import { Carousel } from "../Carousel";
export const Home = ()=>{
    return(
        <div className="center">
      
      <h3 style={{marginTop:"3%",color:"#122DB7"}}>Welcome to Coimbatore Dermal Center</h3>
       
       <Carousel/>
      <Contact/>
      
        </div>
    )
        
    
}