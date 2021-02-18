import styled from 'styled-components';
import PicOne from '../../images/food-3.jpg';
import PicTwo from '../../images/food-5.jpg';
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
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${backPic});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 1px solid white;
    
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    color: white;
    

    @media screen and (max-width: 650px) {
        flex-direction: column;  
        width: 100%;
        
    }
`;

export const AboutText = styled.div`

    width: 100vw; 
    height: 100vh;
    

    @media screen and (max-width: 650px) {
        width: 100%;
        
    }

`; 

export const AboutWrap = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items:  center;
    text-align: center;

`;

export const AboutH1 = styled.div`
    width: 100%;
    font-size: 60px;
    padding: 0.5rem 2rem;
    text-transform: uppercase;
`;

export const AboutP = styled.div`
    width: 100%;
    font-size: 25px;
    line-height: 1;
    padding: 0.5rem 2rem;

`;


export const ButtonWrap = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const AboutButton = styled.button`

    font-size: 1.2rem;
    padding: 0.75rem 1.5rem;

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

