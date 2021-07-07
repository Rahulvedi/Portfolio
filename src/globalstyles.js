import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
a{
  text-decoration: none;
  &:hover{
    text-decoration: none;
  }
}
`
export const Box = styled.div`
align-items: center;
z-index: 1;
margin-right: auto;
margin-left: auto;
padding-left: 30px;
padding-right: 30px;
@media screen and (max-width:768px){
  padding-right: 1rem;
  padding-left: 1rem;
}
`
export const Button = styled(motion.button)`
background-color: #FF9800;
color: white;
font-weight: 500;
font-size: ${({ sm }) => (sm ? '1rem' : '1.5rem')};
height: ${({ sm }) => (sm ? '2rem' : '3rem')};
border-radius: .75rem;
outline: none;
border:none;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
padding:  0 1.5rem;
&:hover{
  background-color: #FF9800;
  color: #fff;
}
@media screen and (max-width:768px){
  display: block;
  margin: auto;
}
`