import React from 'react'
import './Footer.css'
import { FaHome } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
import { BsGlobe } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'


function Footer() {
    return(
        <div className='main'>
            <footer className='footer'>
                <div className='top'>
                    <h2>Start using BTS today!</h2>
                </div>
                <div className='content'>
                    <div className='section a'>
                        <h1>BTS</h1>
                        <h4>Reinventing Our Public Transport</h4>
                        <h3>Book your seat</h3><span><button>Sign Up</button></span>
                    </div>
                    <div className='section b'>
                        <h4><FaHome/>Home</h4>
                        <h4><FcAbout/>About</h4>
                    </div>
                    <div className='section c'>
                        <h4><FaPhoneAlt/>Phone: <span>+2547 --- -- ---</span></h4>
                        <h4><AiTwotoneMail/>Email us: <span>bts.travel@gmail.com</span></h4>
                        <h4><BsGlobe/>www.bts.com</h4>
                    </div>
                </div>
                <div className='bottom'>
                    &#9400; 2023 BusTransitSystem.com
                </div>
            </footer>
        </div>
        
    )
}

export default Footer;