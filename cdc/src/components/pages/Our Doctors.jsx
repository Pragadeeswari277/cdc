import React from "react";
import "../Tab.css"; 
import Contact from "../Contacts";
export const Doctors = ()=>{ 
    const info=[
        {id:1,
         image:'Avatar.png',
         name:"Dr. Pankaj R",
         about:"Dr. Pankaj R is a highly accomplished and respected Dermatologist based in Coimbatore,known for his passion for skincare and dedication to helping patients achieve optimal skin health and confidence. With a patient-centric approach, he tailors personalized treatment plans, staying up-to-date with the latest advancements in dermatology to provide cutting-edge solutions. Dr. Pankaj's warm and approachable demeanor creates a trusting and comfortable environment, leading to a loyal following of satisfied patients who value his expertise and genuine care. Beyond his clinical practice, he contributes to the field through research, publications, and educational initiatives, solidifying his position as a sought-after and respected figure in the medical community."
        },
        {
         id:2,
         image:'Avatar.png',
         name:"Dr. Rabindranath Nambi",
         about:"Dr. Rabindranath Nambi is a dedicated consultant dermatologist with over 25 years of experience in Dermatology. His passion for making people feel better drives him in each clinic he conducts, and putting patients first has been his unwavering dogma. Specializing in skin lesions, vitiligo, melanoma, mole mapping, skin cancers, acne, eczema, psoriasis, and other challenging conditions, he offers knowledgeable and compassionate care. Dr. Nambi's expertise is further evidenced by his publications in leading journals, authored chapters in Dermatology textbooks, and recognition in national newspapers. With a strong focus on patient-centered care, he is a trusted dermatologist, serving as a reliable partner"
        },
        {
            id:3,
            image:'Avatar.png',
            name:"Dr. B. Jeevankumar",
            about:"Dr. B. Jeevankumar is a highly qualified and respected Dermatologist based in Peelamedu, Coimbatore, Tamil Nadu, India. With considerable experience in the field, he specializes in a wide range of dermatological treatments, including Acne Treatment, Tattoo Removal, Mole Removal, Wart Removal, Laser Hair Removal, and Botox, among others. Driven by a passion for his noble profession, he strives to provide the best possible care and treatment for his patients, ensuring their satisfaction and well-being. With a proactive approach to healthcare, he aims to serve the local community comprehensively, offering the highest standard of dermatological care."
        }
    ]
    return (
    <div className="container">
        <div className="center">
       
        <img src="founder.jpg" className="imageSize"/>

        <h3 style={{fontWeight:"bold",marginTop:"2%"}}>Dr.M Sivalingam</h3>
        <h3 style={{color:"red",marginTop:"0.5%"}}>Founder</h3>
        </div>
        <div className="para">
        <p style={{lineHeight:'2',marginTop:"1%",fontSize:20}}>
        Dr. M Sivalingam was a pioneering dermatologist 
        and the visionary founder of Coimbatore Dermal Centre. 
        he exhibited exceptional diligence and discipline in his studies, 
        securing a seat at Madras Medical College. With the steadfast interest ,
         he specialized in Dermatology and established the renowned center.
          Driven by a passion for medicine and patient care, 
          he earned a reputation as a trusted medical professional in the region.
           In 2021, he left behind a lasting legacy in the field of dermatology,
            with the Coimbatore Dermal Centre continuing to uphold his values of compassion and
             excellence in skin care.
        </p>
        </div>
          
        <h3 style={{marginTop:"3%",color:"#122DB7",textAlign:"center",marginBottom:"2%"}}>OUR DOCTORS</h3>

        {info.map((item)=>(

           
            <div className={item.id%2!=0?"doctor-card separator1":"doctor-card separator2"}>
               
                  
                    {item.id%2==1&&
                    <div className="dimage">
                    <h2 style={{fontWeight:"bold",marginTop:"2%",textAlign:"center",marginBottom:"5%"}}>{item.name}</h2>
                     </div>} 
                 <div className="dcontent">
                     <p style={{lineHeight:'2',marginTop:"1%",textAlign:"justify",fontSize:20}}>{item.about}</p>
                     </div>
                     {item.id%2==0&&
                     <div className="dimage">
                     <h2 style={{fontWeight:"bold",marginTop:"2%",textAlign:"center",marginBottom:"5%"}}>{item.name}</h2>
                      </div>
                     }
              
                </div>
        ))}
       
    </div>
    )
};