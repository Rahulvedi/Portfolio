import styled from "styled-components";
import { Box } from "../../globalstyles";
import {AiFillGithub,AiFillInstagram,AiOutlineTwitter} from 'react-icons/ai'

// elements
export const FooterBox=styled(Box)`
background-color: #6C63FF;
max-width: 95rem;
`
export const Info=styled.div`
display: flex;
`
export const TextWrapper=styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: .5rem;
`
export const SocialIcons=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content:center;
`
export const Github=styled(AiFillGithub)`
color: white;
cursor: pointer;
font-size: 2.5rem;
margin-right: 1rem;
transition: all ease 300ms;
&:hover{
    transform: translateY(-10px);
}
@media screen and (max-width:768px){
    font-size: 2rem;
    margin-right: .5rem;
}
`
export const Instagram=styled(AiFillInstagram)`
color: white;
cursor: pointer;
font-size: 2.5rem;
margin-right: 1rem;transition: all ease 300ms;
&:hover{
    transform: translateY(-10px);
}
@media screen and (max-width:768px){
    font-size: 2rem;
    margin-right: .5rem;
}
`
export const Twitter=styled(AiOutlineTwitter)`
color: white;
cursor: pointer;
font-size: 2.5rem;
margin-right: 1rem;transition: all ease 300ms;
&:hover{
    transform: translateY(-10px);
}
@media screen and (max-width:768px){
    font-size: 2rem;
    margin-right: .5rem;
}
`
export const Name=styled.h4`
color: white;
margin-bottom: 0;
@media screen and (max-width:768px){
    font-size: 1rem;
}
`
export const Email=styled.p`
color: white;
margin-bottom: 0;
@media screen and (max-width:768px){
font-size: .8rem;
}
`
export const Copyright=styled.p`
margin: 0;
text-align: center;
color: white;
`
export const Link=styled.a``