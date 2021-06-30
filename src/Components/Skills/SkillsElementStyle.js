import styled from "styled-components";
import { Box } from "../../globalstyles";
import codeSvg from '../../Images/code.svg'
import languageSvg from '../../Images/Languages.svg'

// Elements

export const SkillBox=styled(Box)`
max-width: 95rem;
`
export const Heading=styled.h2`
text-align: center;
margin: auto;
width: 100px;
color: #6C63FF;
border-bottom: 5px solid #6C63FF ;
`
export const Content=styled.div`
display: flex;
padding-top: 4rem;
padding-bottom: 4rem;
@media screen and (max-width:768px){
    flex-direction: column;
}
`
export const Img1=styled.img.attrs({
    src: languageSvg,
    alt: 'Languages'
})`
width: 50%;
padding-right: 4rem;
max-height: 500px;
@media screen and (max-width:768px){
    width: 100%;
    height: 50%;
    padding-right: 0;
}
`
export const Img2=styled.img.attrs({
    src: codeSvg,
    alt: 'image'
})`
width: 50%;
padding-right: 4rem;
max-height: 500px;
@media screen and (max-width:768px){
    width: 100%;
    height: 50%;
    display: none;

}
`
