import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <>
      <div className='about'>
        <h1 className='header'>About Bus Transit Service</h1>
        {/*  */}
        <div className='do'>
            <h2 className='header'>Reinventing Public Transportation</h2>
            <div>
              <p>The BRT System Application aims at making transport information and travelling services affordable and convenient for all.The BRT System is designed to provide clients with realtime service information, being fully committed to serving you 24/7 making public transport more effecient and convenient.</p>
            </div>
            <h2 className='header'>What we do</h2>
            <div className='ul'>
              <ul>
                <li>Pick you at your door step</li>
                <li>Give you fair bus rates</li>
                <li>Take you where you want to go</li>
                <li>Take you there fast</li>
              </ul>
            </div>
        </div>

        <div className='partners'>
          <h2 className='header'>Who We Work With</h2>
          <div>
            <iframe 
            src='' 
            title='molo'
            ></iframe>
            <iframe
            src=''
            title='ena'
            ></iframe>
            <iframe
            src=''
            title='modern'
            ></iframe>
          </div>
        </div>
        {/*  */}
        <div>
          <h2 className='header'>Our Mission</h2>
          <img 
          src='https://rehobothsystems.net/image/mission.jpg'
          alt='mission'
          id='midpo' />
          <p>To serve you how we know best.</p>
        </div>
        {/*  */}
        <div>
          <h2 className='header'>Our Core Values</h2>
          <h3 className='header'>Integrity</h3>
          <img src='https://imgs.search.brave.com/hbgpgWA7EdaMAbDJkivJOQDspBBWm_3fEmkNfiuHZuc/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/T0lndEFtTHB2WjVB/NUhlWFpKVndnSGFF/NiZwaWQ9QXBp'
            alt='integrity'
            id='midpo' />
          <p>BRT aims at serving clients in the most dignified and honest way possible.</p>
          <h3 className='header'>Diversion and Inclusion</h3>
          <img src='https://imgs.search.brave.com/T7ae3tCcoxJ9_4sbQcMLox8WfyGEIW2NKJx3lHsrvaM/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/ZEZjWXJXNjl3LXVE/Y3c0RVd1MzN3SGFG/aiZwaWQ9QXBp'
            alt='everyone'
            id='midpo' />
          <p>Considering all peoples, BRT gives everyone a fair opportunity to go on with their daily movement in the most timely manner.</p>
          <h3 className='header'>Professionalism</h3>
          <img src='https://imgs.search.brave.com/xD_FdXleSv70z0s0y7MrFKoF2ByNoWSow2-cxqw9mOY/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/WUR2RGxQTHJBOE9I/NFRGdmw0ei1BSGFF/NyZwaWQ9QXBp'
            alt='professionalism'
            id='midpo' />
          <p>The BRT offers high quality services to all its clients, maintaining world class professionalism.</p>
        </div>
        {/*  */}
        <div>
          <h2 className='header'>Our Vision</h2>
          <img src='https://imgs.search.brave.com/UpmTnxRTInj6onfb1jv6wNiwkc6NVPeTn9L-VSQuh8k/rs:fit:1164:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/bnljZ0FvYUFMRVl0/UWZsd21UaDVBSGFE/QiZwaWQ9QXBp'
            alt='vision'
            id='midpo'   
           />
          <p>Partner with all local bus service providers and provide our services to all towns by 2025.</p>
        </div>
      </div>
    </>
  )
}

export default AboutUs