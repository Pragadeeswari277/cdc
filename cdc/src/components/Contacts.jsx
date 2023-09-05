import React from "react";
import "./Footer.css";
 const Contact=()=>{
    return(
        <div className="FooterContainer">
            <div style={{margin:"1%"}}>
            <h3 >GET HELP</h3>
         <p style={{marginTop:"3%"}}>Call :<a href="tel:+919361455974" style={{textDecorationColor:"white",color:"white"}}>+91 1234567890</a></p>
         <p>Email : <a href="mailto:shreejai4002@gmail.com" style={{textDecorationColor:"white",color:"white"}}>shreejai4002@gmail.com</a></p>
        
            </div>
            <div style={{margin:"1%"}}>
            <h3 >ADDRESS</h3>
         <p style={{marginTop:"3%"}}>418, Dr Nanjapaa Rd, Ram Nagar,Gandhipuram, Coimbatore, TamilNadu, 641018</p>
            </div>
            
         
        </div>
    )
}

export default Contact;