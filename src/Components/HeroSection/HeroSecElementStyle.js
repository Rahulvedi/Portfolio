import styled from "styled-components";
import { Box, Button } from "../../globalstyles";
import HeroSvg from '../../Images/Hero.svg'


// Element
export const HeroContainer = styled(Box)`
padding-top: 8rem ;
padding-bottom: 8rem ;
display: flex;
flex-wrap: wrap-reverse;
justify-content: space-between;
@media screen and (max-width:767px){
    padding-top: 4rem ;
    padding-bottom: 4rem ;
}
`
export const Content = styled.div`
width: 50%;
max-width: 500px;
padding-right: 2rem;
padding-left: 2rem;
@media screen and (max-width:767px){
 display: flex;
flex-direction: column;
width: 100%;
max-width: 100%;
height: 50%;
padding: 1rem 0 0 0 ;
}
`
export const ImgWrapper = styled.div`
display: flex;
width: 50%;
padding-right: 2rem;
padding-left: 2rem;
justify-content: center;
@media screen and (max-width:767px){
    width: 100%;
    height: 50%;
    padding: 0 0 1rem 0;
}
`
export const HeroImg = styled.img.attrs({
    src: HeroSvg,
    alt: 'HomeImage'
})`
  max-width: 600px;
    height: auto;
    width: 100%;
@media screen and (max-width:768px){
    max-width: 400px;
}
`
export const TextWrapper = styled.div`
@media screen and (max-width:768px){
    font-size: 2rem;
    text-align: center;
}
`
export const Title = styled.p`
color: #6C63FF;
font-size: 1.5rem;
@media screen and (max-width:768px){
    font-size: 1rem;
}
`
export const Heading = styled.h1`
font-size: 3rem;
margin-bottom: 1rem;
font-weight: 700;
color: #484747;
`
export const HeroButton = styled(Button)`
@media screen and (max-width:768px){
    width:90%;
}
`