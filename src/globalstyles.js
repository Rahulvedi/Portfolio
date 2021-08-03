import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:root{
  --color--primary:#6C63FF;
  --color--secondary:#FF9800;
  --color--DimGrey:#696969;

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
export const Button = styled.button`
background-color: var(--color--secondary);
display: flex;
color: white;
align-items: center;
justify-content: center;
cursor: pointer;
font-weight: 500;
font-size: ${({ sm }) => (sm ? '1rem' : '1.5rem')};
height: ${({ sm }) => (sm ? '2rem' : '3rem')};
border-radius: .75rem;
outline: none;
border:none;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
padding:  0 1.5rem;
&:hover{
  background-color: var(--color--secondary);
  color: #fff;
  transform: scale(1.1);
}
@media screen and (max-width:768px){
  display: block;
  margin: auto;
}
`