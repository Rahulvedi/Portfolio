import React from 'react'
import {Button} from "../../globalstyles";
import { SectionBox, Background, Content, TextWrapper, ImgWrapper,SectionImg,Text} from './HomeSec1ElementsStyle'
import {AiOutlineArrowRight} from 'react-icons/ai'
const HomeSec1 = () => {
    return (
        <SectionBox>
            <Background />
            <Content>
                <TextWrapper>
                    <Text>I am a web developer from India,Rajasthan  and currently living in sikar.I enjoy  building everything from small business sites to rich interactive web apps.If you are a business seaking a web presence or a employer looking to hire,you can get in touch with me here.</Text>
                    <Button >More About Me <AiOutlineArrowRight/></Button>
                </TextWrapper>
                <ImgWrapper>
                    <SectionImg />
                </ImgWrapper>
            </Content>
        </SectionBox>
    )
}
export default HomeSec1