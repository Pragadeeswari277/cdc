import React from "react";
import "../Tab.css";
export const Treatments = ()=>{
    const data = [
        {
          id: 1,
          image: 'General.jpg',
          disorder:'General Dermatology',
          text: 'Our comprehensive general dermatology services cover a wide range of skin conditions, offering diagnosis and treatment for various issues,ensuring healthy and radiant skin.',
        },
        {
          id: 2,
          image: 'Medical.jpg',
          disorder:'Medical Dermatology',
          text: 'Specializing in medical dermatology, we address complex skin disorders and diseases, utilizing advanced techniques to provide effective solutions for optimal skin health.',
        },
        {
          id: 3,
          image: 'Pediatric.jpg',
          disorder:'Pediatric Dermatology',
          text: 'Our dedicated team of pediatric dermatologists cater to the unique skin needs of children, offering gentle and specialized care for pediatric skin conditions.',
        },
        {
          id: 4,
          image: 'Geriatric.jpg',
          disorder:'Geriatric Dermatology',
          text: 'Tailored to the elderly, our geriatric dermatology services focus on age-related skin concerns, promoting comfort and well-being for mature skin.',
        },
        {
          id: 5,
          image: 'Hair.jpg',
          disorder:'Hair Disorders',
          text: 'From hair loss to scalp conditions, our dedicated team offers personalized solutions to address hair-related issues, restoring confidence and vitality.',
        },
        {
          id: 6,
          image: 'Nail.jpg',
          disorder:'Nail Disorders',
          text: 'We provide comprehensive assessment and treatment for nail disorders, ensuring healthy nails and preventing further complications.',
        },
        {
          id: 7,
          image: 'Mole.jpg',
          disorder:'Mole Removal',
          text: 'Using advanced techniques, we perform safe and precise mole removal procedures, addressing cosmetic and medical concerns with minimal scarring',
        },
        {
          id: 8,
          image: 'wart.jpg',
          disorder:'Wart Treatment',
          text: 'Our wart treatments employ a variety of methods to eliminate warts, ensuring a swift and effective resolution to these common skin growths.',
        },
        
      ];
      return (
        <div className="container">
        <h3 style={{marginTop:"3%",color:"#122DB7",textAlign:"center"}}>OUR TREATMENTS</h3>
        <div className="grid">
          {data.map((item,index) => (
           
            <div className="treat zoomable" key={item.id}>
              <div className="zoomable-image">
                <img 
                  src={item.image}
                  alt={item.disorder}
                />
              </div>
              <div className="zoomable-text">
                <h3 style={{ color: '#122DB7',marginBottom:"3%" }}>{item.disorder}</h3>
                <p style={{marginBottom:"3%"}}>{item.text} </p>
              </div>
            </div>

          
          )
          
            
          )}
        </div>
        </div>
      );
    };