import React from 'react'
import { Section, ImgWrapper, AboutImg, TextWrapper, Text } from './AboutSecElementStyle'

const AboutSec1 = () => {
    return (
        <Section>
            <ImgWrapper>
                <AboutImg />
            </ImgWrapper>
            <TextWrapper>
                <Text>I am a web developer from India,Rajasthan  and currently living in sikar.I enjoy  building everything from small business sites to rich interactive web apps.If you are a business seaking a web presence or a employer looking to hire,you can get in touch with me here.</Text>
            </TextWrapper>
        </Section>
    )
}

export default AboutSec1
