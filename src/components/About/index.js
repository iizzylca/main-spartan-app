import React from 'react'
import {Link} from 'react-router-dom'
import { AboutContainer, AboutText , AboutButton, AboutWrap, AboutH1, AboutP, ButtonWrap, PhotoData} from './AboutElements';

// import {Link} from 'react-router-dom'
// import AboutPage from './AboutPage'

const AboutHome = () => {

    return(
        <AboutContainer>
            <AboutText>
                <AboutWrap>
                    <AboutH1>About Us</AboutH1>
                    <AboutP >Spartan’s Grill is a modern and traditional Greek fast food restaurant, it was inspired by one of our co-founders who had the desire to bring high quality Greek fast food to America. Being of Greek descent he understood that sticking to tradition and having fresh ingredients would be the key to our success.</AboutP>
                    <ButtonWrap>
                        <AboutButton>
                            <Link to="/menu">Our Menu</Link>
                        </AboutButton>
                        <AboutButton className='read-more-btn'>
                            <Link  to="/about">Read More</Link>
                        </AboutButton>
                    </ButtonWrap>
                </AboutWrap>
            </AboutText>
            <div className='about-pic-wrapper'>
                {PhotoData.map((picture, index)=> {
                    return(
                        <img className='about-img' key={index} src={picture.image} alt={picture.alt} />
                    )
                })}
            </div>
        </AboutContainer>
    )
    
}

export default AboutHome