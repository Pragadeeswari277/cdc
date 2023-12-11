import React from "react";
import "./Footer.css";

const Maplink=({location})=>{
    const handleClick = () => {
        // Use the Google Maps URL with the specified location
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        
        // Redirect to the Google Maps URL
        window.open(googleMapsUrl, '_blank');
      };
    
      return (
        <div>
         
            <span style={{ color: 'white', cursor: 'pointer' }} onClick={handleClick}>
            🌐 426, Dr Nanjappa road, Coimbatore - 641018
            </span>
          
        </div>
      );
}

 const Contact=()=>{
    return(
        <div className="FooterContainer">
            <div style={{margin:"1%"}}>
            <h3 >GET HELP</h3>
         <p style={{marginTop:"3%"}}><a href="tel:0422 2235446" style={{textDecorationColor:"white",color:"white"}}> 0422 2235446</a></p>
         <p><a href="mailto:cbeskinclinic@gmail.com" style={{textDecorationColor:"white",color:"white"}}>cbeskinclinic@gmail.com</a></p>
        
            </div>
            <div style={{margin:"1%"}}>
            <h3 >ADDRESS</h3>
         
         <Maplink location="The Coimbatore Dermal Centre" style={{marginTop:"3%"}}/>
            </div>
            
        </div>
    )
}

export default Contact;