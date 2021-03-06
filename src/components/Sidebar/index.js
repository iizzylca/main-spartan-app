import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

function Sidebar({isOpen, toggle}){
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Home</SidebarLink>
                <SidebarLink to='/about'>About</SidebarLink>
                <SidebarLink to='/menu'>Menu</SidebarLink>
            </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/'>Order Now</SidebarRoute>
                </SideBtnWrap>
        </SidebarContainer>
    )
}

export default React.memo(Sidebar)
