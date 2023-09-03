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
          text: 'Our expert pediatric dermatologists cater to the unique skin needs of children, offering gentle and specialized care for pediatric skin conditions.',
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
          image: 'Cyrotheraphy.jpg',
          disorder:'Cyrotheraphy',
          text: 'Our cutting-edge cryotherapy treatments involve the use of extreme cold to effectively target and remove skin lesions, offering a non-invasive solution.',
        },
        {
          id: 8,
          image: 'Mole.jpg',
          disorder:'Mole Removal',
          text: 'Using advanced techniques, we perform safe and precise mole removal procedures, addressing cosmetic and medical concerns with minimal scarring',
        },
        {
          id: 9,
          image: 'wart.jpg',
          disorder:'Wart Treatment',
          text: 'Our wart treatments employ a variety of methods to eliminate warts, ensuring a swift and effective resolution to these common skin growths.',
        },
        
      ];
    return (
        <div className="container">
      {data.map((item) => (
        <div className="treat" >
          <img src={item.image} style={{width:"250px",height:"auto"}} />
          <div style={{display:"flex",flexDirection:"column",marginLeft:"2%",width:'50%'}}>
          <h3 style={{marginTop:"5%",marginBottom:"1%"}}>{item.disorder}</h3>
          <p style={{lineHeight: '2'}}>{item.text}  </p>
         </div>
          
        </div>
      ))}
    </div>
    );
};