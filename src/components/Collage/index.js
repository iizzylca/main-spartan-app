import React from 'react';
import Gallery from 'react-photo-gallery';
import { Photos } from './Photos';

const Collage = () => {


    return(
        <div className='about-gallery'>
            <Gallery photos={Photos}/>
        </div>
    )
}

export default React.memo(Collage)