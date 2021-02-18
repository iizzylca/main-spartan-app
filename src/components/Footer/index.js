import React from 'react';
import {
    FaFacebook,
    FaInstagram
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElement';
import Logo from '../../images/logo.png'


const Footer = () => {
    return (
    <FooterContainer>
        <FooterWrap>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'><img className='footer-img' src={Logo} alt='Spartan Soldier Logo'></img></SocialLogo>
                <p>Copyright © 2021 Spartan's Grill</p>
                <SocialIcons>
                    <SocialIconLink 
                    href='https://www.facebook.com/SpartansGrill123/'
                    target='_blank'
                    aria-label='Redirect to Facebook'
                    rel='noopener noreferrer'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink 
                    href='//www.instagram.com'
                    target='_blank'
                    aria-label='Redirect to Instagram'
                    rel='noopener noreferrer'>
                        <FaInstagram />
                    </SocialIconLink> 
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    );
};

export default React.memo(Footer);