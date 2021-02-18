import styled from 'styled-components';
import HeadPic from '../../images/food-16.jpg'
import InfoPic from '../../images/food-20.jpg'


export const AboutContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${HeadPic});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    max-height: 100%;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;
    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }
    @media screen and (max-width: 650px) {
        background-attachment: initial;
        background-position-x: 50%;
        background-position-y: 0%;
        background-position: center top;
        background-repeat: no-repeat;
        background-size: auto 100%;
    }
    
`;

export const AboutButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;
    &:hover {
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;

export const MoreContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${InfoPic});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    max-height: 100%;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;
    h1 {
        font-family: 'Mason-Serif';
        font-size: clamp(3rem, 5vw, 5rem);
        margin-bottom: 2.5rem;
    }
    p {
        font-family: 'Mason-Serif';
        margin-bottom: 1.5rem;
        line-height: 1;
        text-align: justify;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`;