import styled from 'styled-components';
import PicOne from '../../images/food-3.jpg';
import PicTwo from '../../images/food-20.jpg';
import backPic from '../../images/food-8.jpg'



export const PhotoData = [

    {
        image: PicOne,
        alt: 'pic-one'
    },
    {
        image: PicTwo,
        alt: 'pic-two'
    }
]

export const  AboutContainer = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-color: white ;

    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${backPic});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    color: white;

    @media screen and (max-width: 650px) {
        flex-direction: column;  
        max-height: 100%;
        width: auto;
        
    }
`;

export const AboutText = styled.div`

    width: 100%; 
    height: 100%;
    position: relative;
    display: block;
    top: 0;
    left: 0;
    justify-content: center;
    text-align: center;
    

    h1 {
        color: #fff;
        text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
        0px -4px 10px rgba(255,255,255,0.3);

        height: 50vh;
        max-height: 50vh%;
        padding: 0.5rem 2rem;
        font-family: 'Mason-Serif';
        font-size: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-transform: uppercase;
    }
    p {
        padding-left: 10px;
        padding-right: 10px;
        height:100vh;
        max-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: 'Mason-Serif';
        font-size: 25px;
        line-height: 1;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
        overflow: scroll;
        
    }

`; 

export const AboutButton = styled.button`
    font-size: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;    
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;

    width: 150px;
    height: 70px;

    &:hover {
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }

    @media screen and (max-width: 650px) {
        max-height: 75%;
        width: auto;
        border-radius: 10px;
    }

`;

