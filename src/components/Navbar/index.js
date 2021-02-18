import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavLink to='/'>
                <img className='logo-img' src='https://spartansgrill.com/wp-content/uploads/2020/05/logo.png' alt='Spartan Soldier Logo'></img>
            </NavLink>
            <NavIcon onClick={toggle}>
                <Bars/>
            </NavIcon>
        </Nav>
    )
}

export default React.memo(Navbar)
