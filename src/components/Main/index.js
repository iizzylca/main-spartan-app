import React from 'react'
import {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {MainContainer, MainContent, MainItems, MainH1, MainP, MainBtn} from './MainElements'
// import AboutHome from '../About/AboutHome';
// import { PhotoData } from '../About/AboutElements.js';
// import Location from '../Location'


const Main = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle}/> 
            <Sidebar isOpen={isOpen} toggle={toggle}/>
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
        </>
    )
} 

export default Main
