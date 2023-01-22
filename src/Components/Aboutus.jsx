import React from 'react'
import './Aboutus.css'
import Bus from '../Images/bus.jpg'
import Phone from '../Images/phone.png'
import Email from '../Images/email.png'
import { CoreValues } from '../Data/Data'

const Aboutus = () => {
  return (
    <>
    {/* Core values */}
   <div className="box">
        <div className="projo">
        <h2 >Our Core Values:</h2>
        </div>
            <div className="projects">
             {CoreValues.map((Values) =>{
              return(
                <div className="card">
                    <img className="avatar" src={Values.image} alt="coffee"></img>
                    <div className="card-content">
                        <h4><b>{Values.coreName}</b></h4>
                        <p id="desc">{Values.description}</p>
                    </div>
                </div>
                )
            })}
          </div>    
    </div>
    {/* ContactUs */}

      <div className="box">
           <div className="about">
               <div className="card">
                   <img className="coffee" src={Bus} alt="coffee"></img>
                   <div className="container">
                       <h4><b>About Us</b></h4>
                       <p>Bus Rapid Transit (BRT) is a high-quality bus-based transit system that delivers fast, comfortable, and cost-effective services at metro-level capacities. It does this through the provision of dedicated lanes, 
                           with busways and iconic stations typically aligned to the center of the road, off-board fare collection, and fast and frequent operations. </p>
                   </div>
               </div>
               <div className="card">
                   <div className="container">
                       <h4><b>Contact-Us</b></h4>
                       <img classname="icon" src={Phone} alt="phone"></img>
                       <p>+254 789 456</p>
                       <img classname="icon" src={Email} alt="email"></img>
                       <p>customercare@brt.com</p>
                       
                   </div>
               </div>
           </div>
       </div>

       {/* Map */}
       
    </>
  )
}

export default Aboutus;