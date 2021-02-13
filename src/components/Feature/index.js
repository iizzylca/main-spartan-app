import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
    <FeatureContainer>
        <h1>Dive In Our Menu</h1>
        <p>Delicious Food To Fit Your Lifestyle.</p>
        <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
    );
};

export default Feature;