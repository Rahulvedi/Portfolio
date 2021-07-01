import styled from "styled-components";
import { Box} from "../../globalstyles";
import SectionSvg from '../../Images/ContactHome.svg'

// Elements
export const SectionBox = styled(Box)`
max-width: 95rem;
position: relative;
padding: 0;
`
export const Background = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: #6C63FF;
clip-path:polygon(40% 0%, 100% 0%, 100% 100%,40% 100%,50% 50%);
z-index: -1;
@media screen and (max-width:768px){
clip-path:polygon(0 40%,100% 40%,100% 100%,0 100%);
}
`
export const Content = styled.div`
padding: 3rem 1rem;
display: flex;
flex-direction: row-reverse;
@media screen and (max-width:768px){
    flex-direction: column-reverse;
}
`
export const TextWrapper = styled.div`
width: 50%;
color: white;
padding-left:2rem ;
@media screen and (max-width:768px){
    width:100%;
    height:60%;
    padding: 0;
}
`
export const ImgWrapper = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width:768px){
    width:100%;
    height:40%;
}
`

export const SectionImg = styled.img.attrs({
    src: SectionSvg,
    alt: 'HomeImage'
})`
max-width: 400px;
max-height: 250px;
height: auto;
width: 100%;
padding-right:2rem;
@media screen and (max-width:768px){
    padding: 0;
}
`
export const Text=styled.p`
font-size: 1.5rem;
@media screen and (max-width:768px){
    font-size: 1.2rem;
}
`