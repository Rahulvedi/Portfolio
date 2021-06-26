import React,{useState}from 'react'
import {NavBarContainer,NavLogo,NavIcon,MobileMenu,CloseIcon,HamburgerIcon,NavMenu ,NavItem,NavLink,NavButton}  from './HeaderElementStyle'
const Header = () => {
    const [Click, setClick] = useState(false)
     let handleClick=(e)=>{
        setClick(!Click)
     }
    return (
        <NavBarContainer>
                <NavLogo to='/'>
                    <NavIcon/>
                    PortFolio
                </NavLogo>
                <MobileMenu>
                    {Click?<CloseIcon onClick={handleClick}/>:<HamburgerIcon onClick={handleClick}/>}
                </MobileMenu>
                <NavMenu click={Click}>
                    <NavItem >
                        <NavLink onClick={handleClick} to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  onClick={handleClick} to='/about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  onClick={handleClick} to='/work'>Work</NavLink>
                    </NavItem>
                </NavMenu>
                <NavButton sm>Contact Me</NavButton>
            </NavBarContainer>
    )
}

export default Header
