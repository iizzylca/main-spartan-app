import React from 'react';
import {Link} from 'react-router-dom'
import { AboutContainer, AboutButton, MoreContainer} from './AboutData';


const AboutPage = () => {

    return(
        <div className='about-home-page'>
            <AboutContainer className='about-us-page'>
                <h1 className='pic-title-head'>Know More About Us</h1>
            </AboutContainer>
            <MoreContainer className='about-extra-box'>
                <h1> A Few Words About Us</h1>
                <p>Spartan’s Grill is a modern and traditional Greek fast food restaurant, it was inspired by one of our co-founders who had the desire to bring high quality Greek fast food to America. Being of Greek descent he understood that sticking to tradition and having fresh ingredients would be the key to our success.
                    Our goal is for every customer to experience Greek fast food at its best while still delivering healthy options. We only use the freshest ingredients and import most of our products from Greece to keep our cuisine and taste authentic. We take pride in preparing every meal with great care and dedication to quality.
                    We look forward to servicing you. Opa!</p>
                    <AboutButton>
                        <Link className='menu-btn' to="/menu"> View Menu</Link>
                    </AboutButton>
            </MoreContainer>
        </div>
    )
    

}

export default AboutPage