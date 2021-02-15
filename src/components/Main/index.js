import React from 'react'
import About from '../About'
import {MainContainer, MainContent, MainItems, MainH1, MainP, MainBtn} from './MainElements'
import Collage from '../Collage'
import Location from '../Location'
// import AboutHome from '../About/AboutHome';
// import { PhotoData } from '../About/AboutElements.js';
// import Location from '../Location'


const Main = () => {
    
    return (
        <>
            <div className='main-wrapper'>
                    <MainContainer>
                        <MainContent>
                            <MainItems>
                                <MainH1 className='main-h1'>Spartan's Grill</MainH1>
                                <MainP>Modern and Traditional Greek Fast Food Restaurant</MainP>
                                <MainBtn>Order Now</MainBtn>
                            </MainItems>
                        </MainContent>
                    </MainContainer>
            </div>
            <About/>
            <Collage/>
            <Location/>
        </>
    )
} 

export default Main
