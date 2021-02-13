import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`

background-color: #2d3436;
background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);

    height: 30vh;
    position: relative;
    display: flex;
    justify-content: center;
    font-weight: 700;
    border-bottom: 1px solid white;
`;

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        flex-direction: column;
        
}
`;


export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(-10px, -50%);
    cursor: pointer;
    color: ivory;

`;

export const Bars = styled(FaBars)`
    font-size: 2rem;
    width: 45px;
    height: 45px;

`;