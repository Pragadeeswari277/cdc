import React from "react";
import "../Tab.css";
import Contact from "../Contacts";
export const About = ()=>{
    return (
        <div className="container">
      <h3 style={{marginTop:"3%",color:"#122DB7"}}>ABOUT US</h3>
      <div className="space">
        <div className="content">
          <p style={{lineHeight: '2'}}>
Coimbatore Dermal Centre is a leading dermatology 
establishment in Gopalapuram, Coimbatore. With a strong 
focus on customer satisfaction, they offer a wide range of services,
 including skin care clinics, cosmetic surgery, and aesthetic dermatology.
  The dedicated team strives to achieve the company's common vision and goals.
   Located near Citi Tower, Gandhipuram, commuti ng to the center is easy.
    Their expertise in addressing various skin concerns and beauty-related
     issues sets them apart as a top player in the field. Trusted by a vast 
     customer base, they continue to expand their offerings to cater to more
      clients.
      
      </p>
      </div>
      <div className="image">
      <img src="H.jpg" className="imageSize"/>
      </div>
      </div> 
     <div className="footer"></div>
     </div>
    )
    
   
};