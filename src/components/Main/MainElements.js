import styled from 'styled-components';
import gif from '../../images/gyro-video.gif'


export const MainContainer = styled.div`
    background: url(${gif});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const MainContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`;

export const MainItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const MainH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;
`;

export const MainP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`;

export const MainBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;
    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;

// import styled from 'styled-components';


// export const MainContainer = styled.div`
//     width: 100vw;
//     height: 100vh;
//     position: absolute;
//     top: 0; 
//     left: 0;
//     @media screen and (max-width: 650px) {
//         width: 100%;
//     }
// `;

// export const MainContent = styled.div`
//     height: 100vh;
//     max-height: 100%;
//     padding: 0rem calc((100vw - 1300px) / 2 );
// `

// export const MainItems = styled.div `
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     height: 100vh;
//     max-height: 100%;
//     padding: 0 2rem;
//     width: 650px;
//     color: #fff;
//     text-transform: uppercase;
//     line-height: 1;
//     font-weight: bold;

//     @media screen and (max-width: 650px) {
//         width: 100%;
//     }
// `

// export const MainH1 = styled.h1`
//     font-size: clamp(2.5rem, 10vw, 4.5rem);
//     margin-bottom: 1rem;
//     margin-right: 4rem;
//     box-shadow: 3px 5px #e9ba23;
//     letter-spacing: 3px;
// `

// export const MainP = styled.p`
//     font-size: clamp(2rem, 2.5vw, 1.5rem);
//     margin-bottom: 2rem;

// `

// export const MainBtn = styled.button`
//     font-size: 1.4rem;
//     padding: 1rem 4rem;
//     border: none;
//     background: #e31837;
//     color: #fff;
//     transition: 0.2s ease-out;
//     &:hover {
//         background: #ffc500;
//         transition: 0.2s ease-out;
//         cursor: pointer;
//         color: #000;
//     }
// `;