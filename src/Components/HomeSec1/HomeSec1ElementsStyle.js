import styled from "styled-components";
import { Box } from "../../globalstyles";

// Elements
export const SectionBox = styled(Box)`
  max-width: 95rem;
  position: relative;
  padding: 0;
`
export const Heading=styled.h1`
text-align: center;
font-size: 2.5rem;
color:var(--color--primary);
`
export const Cards=styled.div`
display: grid;
padding: 2rem 4rem 6rem 6rem;
grid-template-columns: repeat(4,minmax(10rem,20rem));
justify-content: center;
@media screen and (max-width:1024px){
  padding: 1rem 2rem;
  grid-template-columns: repeat(4,minmax(10rem,20rem));
}
@media screen and (max-width:768px){
  padding: 1rem 2rem;
  grid-template-columns: repeat(2,minmax(10rem,20rem));
}
@media screen and (max-width:640px){
  padding: .5rem .5rem;
  grid-template-columns: repeat(1,20rem);
}
`
export const Card=styled.div`
padding: 1rem 1rem;
display: flex;
margin: 1.5rem 1.5rem;
flex-direction: column;
cursor: pointer;
border-radius: 1.5rem;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
transition: all 0.5s;
&:hover{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: translateY(-2rem);
}
 
`
export const Title=styled.h3`
text-align: center;
margin: .5rem;
color: var(--color--primary);
`
export const CardImg=styled.img`
/* min-width: 150px; */
min-height: 300px;
margin-bottom: .5rem;
`
export const Text=styled.p`
color: var(--color--DimGrey);
`