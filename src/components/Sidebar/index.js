import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Home</SidebarLink>
                <SidebarLink to='/'>About</SidebarLink>
                <SidebarLink to='/'>Menu</SidebarLink>
                <SidebarLink to='/'>Contact</SidebarLink>
            </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/'>Order Now</SidebarRoute>
                </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
