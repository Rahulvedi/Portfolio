import styled from "styled-components";
import { Box } from "../../globalstyles";
import Aboutsvg from '../../Images/Hiring.svg'
// Element

export const Section=styled(Box)`
max-width: 95rem;
padding-top: 8rem ;
padding-bottom: 8rem ;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media screen and (max-width:767px){
    padding-top: 4rem ;
    padding-bottom: 4rem ;
}`
export const ImgWrapper=styled.div`
display: flex;
width: 50%;
padding-right: 2rem;
padding-left: 2rem;
justify-content: center;
@media screen and (max-width:768px){
    width: 100%;
    height: 50%;
    padding: 0 0 1rem 0;
}`
export const TextWrapper = styled.div`
width: 50%;
padding-left:2rem ;
@media screen and (max-width:768px){
    width:100%;
    height:60%;
    padding: 0;
}
`
export const Text=styled.h1`
font-size: 2rem;
margin-bottom: 2rem;
@media screen and (max-width:768px){
text-align: center;
    font-size: 1.2rem;
}
`
export const AboutImg=styled.img.attrs({
    src: Aboutsvg,
    alt: 'AboutImg'
})`
  max-width: 600px;
    height: auto;
    width: 100%;
@media screen and (max-width:768px){
    max-width: 400px;
}
`