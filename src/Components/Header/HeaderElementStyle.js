import styled from 'styled-components'
import { Box,Button} from '../../globalstyles'
import { Link } from 'react-router-dom'
import { FiAperture } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
const NavBarContainer = styled(Box)`
display: flex;
justify-content: space-between;
height: 4rem;
position: sticky;
z-index: 999;
background-color: #fff;
top: 0;
`
const NavLogo = styled(Link)`
cursor: pointer;
justify-self: flex-start;
color: #6C63FF;
text-decoration: none;
font-size: 1.5rem;
font-weight: bold;
display:flex;
align-items: center;
&:hover{
  color: #6C63FF;
  text-decoration: none;
}

`
const NavIcon = styled(FiAperture)`
margin-right: 0.5rem;
font-size: 2rem;
`

const MobileMenu = styled.div`
display: none;
@media screen and (max-width:768px){
  display: flex;
height: 4rem;
justify-content: center;
align-items: center;

color: white;
}
`
const HamburgerIcon = styled(FaBars)`
color:#000;
font-size: 1.5rem;
cursor: pointer;
${FaBars}
`
const CloseIcon = styled(FaTimes)`
color:#000;
font-size: 1.5rem;
cursor: pointer;
/* ${FaTimes} */
`
const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-bottom: 0;

@media screen and (max-width:768px){
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 90vh;
  top: 4rem;
  z-index: 10;
  left: ${({ click }) => (click ? '0' : '-100%')};
  opacity: ${({click})=>(click?1:0)};
  background: #fff;
  transition: all 0.5s ease;
}
`
const NavItem = styled.li`
height: 4rem;
border-bottom: 2px solid transparent;
display: flex;
align-items: center;
list-style: none;
@media screen and (max-width:768px){
  width: 100%;
  &:hover{
    border:none;
  }
}
`
const NavLink = styled(Link)`
color: #B6A6A6;
font-weight: bold;
display: flex;
align-items: center;
padding:  0.5rem 2rem;
text-decoration: none;
&:hover{
  color: #6C63FF;
   transition: all 0.3s ease;
   /* transform: scale(1.2); */
    text-decoration: none;
 }
@media screen and (max-width:768px){
 align-items: center;
 display: table;
 width: 100%;
 padding: 2rem;

}
`
const NavButton=styled(Button)`
@media screen and (max-width:840px){
  display:none;
}
`
export {  NavBarContainer, NavLogo, NavIcon, MobileMenu, HamburgerIcon, CloseIcon, NavItem, NavLink, NavMenu,NavButton}