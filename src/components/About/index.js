import React from 'react'
import { AboutContainer, AboutText , AboutButton, PhotoData} from './AboutElements';

// import {Link} from 'react-router-dom'
// import AboutPage from './AboutPage'

const About = () => {

    return(
        <AboutContainer>
            <AboutText>
                <div className='about-text-wrapper'>
                    <h1 className='h1-tag'>About Us</h1>
                    <p className='p-tag-text'>Spartan’s Grill is a modern and traditional Greek fast food restaurant, it was inspired by one of our co-founders who had the desire to bring high quality Greek fast food to America. Being of Greek descent he understood that sticking to tradition and having fresh ingredients would be the key to our success.</p>
                    <div className='button-wrapper'>
                        <AboutButton className='read-more-btn' href='#none' to="/menu">Our Menu</AboutButton>
                        <AboutButton className='read-more-btn' href='#none' to="/about"> Read More</AboutButton>
                    </div>
                </div>
            </AboutText>
            <div className='about-pic-wrapper'>
                {PhotoData.map((picture, index)=> {
                    return(
                        <div className='pic-wrapper' key={index}>
                            <img className='about-img' src={picture.image} alt={picture.alt} />
                        </div>
                    )
                })}
            </div>
        </AboutContainer>
    )
    
}

export default About