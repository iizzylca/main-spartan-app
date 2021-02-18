import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
import Slider from '../Slider'
import { SliderData } from '../Slider/SliderData';

function Feature(){
    return (
        <>
        <FeatureContainer>
            <h1>Dive In Our Menu</h1>
            <p>Delicious Food To Fit Your Lifestyle.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
        <Slider slides={SliderData}/>
        </>
    );
};

export default React.memo(Feature);