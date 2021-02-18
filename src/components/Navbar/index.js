import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements'
import Logo from '../../images/logo.png'

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavLink to='/'>
                <img className='logo-img' src={Logo} alt='Spartan Soldier Logo'></img>
            </NavLink>
            <NavIcon onClick={toggle}>
                <Bars/>
            </NavIcon>
        </Nav>
    )
}

export default React.memo(Navbar)
