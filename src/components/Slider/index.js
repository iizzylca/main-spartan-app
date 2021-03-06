import React, {useState} from 'react'
import {SliderData, SlideBackground} from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'


function Slider ({slides}){

    const [current, setCurrent] = useState(0);

    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }


    if(!Array.isArray(slides)|| slides.length <= 0){
        return null
    }


    return (
        <SlideBackground className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {SliderData.map((slide, index)=> {
                return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                    <img className='menu' src={slide.image} alt={slide.alt}/>
                    )}
                </div>
                ) 
            })}
        </SlideBackground>
    ) 
}

export default React.memo(Slider)
