import styled from 'styled-components';
import menuOutside from '../../images/menu-outside.jpg';
import menuInside from '../../images/menu-inside.jpg';
import ImageMenu from '../../images/food-14.jpg';


export const SliderData = [

    {
        image: menuOutside,
        alt: 'menu-outside'
    },
    {
        image: menuInside,
        alt: 'menu-inside'
    }
]

export const SlideBackground = styled.div`

    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url(${ImageMenu});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    
    
`