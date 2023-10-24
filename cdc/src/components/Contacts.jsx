import React from "react";
import "./Footer.css";
 const Contact=()=>{
    return(
        <div className="FooterContainer">
            <div style={{margin:"1%"}}>
            <h3 >GET HELP</h3>
         <p style={{marginTop:"3%"}}><a href="tel:0422 2235446" style={{textDecorationColor:"white",color:"white"}}> 0422 2235446</a></p>
         <p><a href="mailto:skindermclinic@yahoo.com" style={{textDecorationColor:"white",color:"white"}}>skindermclinic@yahoo.com</a></p>
        
            </div>
            <div style={{margin:"1%"}}>
            <h3 >ADDRESS</h3>
         <p style={{marginTop:"3%"}}>418, Dr Nanjapaa Rd, Ram Nagar,Gandhipuram, Coimbatore, TamilNadu, 641018</p>
            </div>
            
        </div>
    )
}

export default Contact;