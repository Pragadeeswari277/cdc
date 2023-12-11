import React from "react";
import "../Tab.css"; 
import Contact from "../Contacts";
export const Doctors = ()=>{ 
    const info=[
        {id:1,
         image:'Avatar.png',
         name:"Dr. Pankaj R",
         qualification:" MD DD",
         about:"Dr. Pankaj R is a highly accomplished and respected Dermatologist based in Coimbatore,known for his passion for skincare and dedication to helping patients achieve optimal skin health and confidence. With a patient-centric approach, he tailors personalized treatment plans, staying up-to-date with the latest advancements in dermatology to provide cutting-edge solutions. Dr. Pankaj's warm and approachable demeanor creates a trusting and comfortable environment, leading to a loyal following of satisfied patients who value his expertise and genuine care. Beyond his clinical practice, he contributes to the field through research, publications, and educational initiatives, solidifying his position as a sought-after and respected figure in the medical community."
        },
        
        {
            id:2,
            image:'Avatar.png',
            name:"Dr. B. Jeevankumar",
            qualification:"MD",
            about:"Dr. B. Jeevankumar is a highly qualified and respected Dermatologist based in Peelamedu, Coimbatore, Tamil Nadu, India. With considerable experience in the field, he specializes in a wide range of dermatological treatments, including Acne Treatment, Tattoo Removal, Mole Removal, Wart Removal, Laser Hair Removal, and Botox, among others. Driven by a passion for his noble profession, he strives to provide the best possible care and treatment for his patients, ensuring their satisfaction and well-being. With a proactive approach to healthcare, he aims to serve the local community comprehensively, offering the highest standard of dermatological care."
        },
        {
            id:3,
            image:'Avatar.png',
            name:"Dr.Damodaran S.A",
            qualification:"DD",
            about:"Dr.Damodaran S.A, a highly regarded Dermatologist with over 4 years of experience, offers a wide range of modern healthcare treatments at Dr. Damodaran's Dermatology and Cosmetology Clinic in Peelamedu, Coimbatore, Tamil Nadu, India. Fluent in Tamil, Hindi, and English, Dr. Damodaran provides a comfortable and empathetic experience for patients. Specializing in Cosmetic Dermatologic Surgery, Integrative Medicine, and various surgical procedures, Dr. Damodaran treats conditions such as Fungal Infections, Pemphigus, Varicose Veins, and more. With a commitment to delivering the highest standard of healthcare, Dr. Damodaran is recognized as one of the top Dermatologists in Coimbatore, Tamil Nadu."
        }
    ]


    const Others=[
        {id:1,
        name:"Dr. S. Harshatha",
        qualification:"MD DVL, DNB DVL",
        specialist:"",
             },
             {id:2,
                name:"Dr. P. Chidambaranathan",
                qualification:"MD",
                specialist:"Consultant Physician & Diabetologist"
                     },
                     {id:3,
                        name:"Dr. J. Anu",
                        qualification:"BDS",
                        specialist:"Dental Surgeon"
                             },
                             {id:4,
                                name:"Dr. M. S. Princiya",
                                qualification:"BDS",
                                specialist:"Dental Surgeon"
                                     }
    ]
    return (
    <div className="container">
        <div className="center">
       
        <img src="founder.jpg" className="imageSize"/>

        <h3 style={{fontWeight:"bold",marginTop:"2%"}}>Dr.M Sivalingam</h3>
        <h3 style={{color:"red",marginTop:"0.5%"}}>Founder</h3>
        </div>
      
          
        <h3 style={{marginTop:"3%",color:"#122DB7",textAlign:"center",marginBottom:"2%"}}>OUR DOCTORS</h3>

        {info.map((item)=>(

           
            <div className={item.id%2!=0?"doctor-card separator1":"doctor-card separator2"}>
               
                  
                    {item.id%2==1&&
                    <div className="dimage">
                    <h2 style={{fontWeight:"bold",marginTop:"2%",textAlign:"center",marginBottom:"5%"}}>{item.name}</h2>
                    <h4 style={{color:"blue"}}>- {item.qualification}</h4>
                     </div>} 
                 <div className="dcontent">
                     <p style={{lineHeight:'2',marginTop:"1%",textAlign:"justify",fontSize:20}}>{item.about}</p>
                     </div>
                     {item.id%2==0&&
                     <div className="dimage">
                     <h2 style={{fontWeight:"bold",marginTop:"2%",textAlign:"center",marginBottom:"5%"}}>{item.name}</h2>
                     <h4 style={{color:"blue"}}>- {item.qualification}</h4>
                      </div>
                     }
              
                </div>
        ))}

        <div className="box">
        {Others.map((item)=>(
            <div className="cover">
    <h3 className="t1" style={{color:"white",textAlign:"center"}}>{item.name}</h3>
    <h4 className="text">{item.qualification} {item.specialist}</h4>
    </div>
             ))}
        </div>

        
       
    </div>
    )
};