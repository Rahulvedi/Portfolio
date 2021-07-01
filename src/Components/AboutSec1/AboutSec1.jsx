import React from 'react'
import { Section, ImgWrapper, AboutImg, TextWrapper, Text } from './AboutSecElementStyle'
import { Button } from '../../globalstyles'
import { BsDownload } from 'react-icons/bs'
const AboutSec1 = () => {
    return (
        <Section>
            <ImgWrapper>
                <AboutImg />
            </ImgWrapper>
            <TextWrapper>
                <Text>I am a web developer from India,Rajasthan  and currently living in sikar.I enjoy  building everything from small business sites to rich interactive web apps.If you are a business seaking a web presence or a employer looking to hire,you can get in touch with me here.</Text>
                <Button><a href='https://drive.google.com/u/0/uc?id=1Id5FUN-u7tIilJ69t2AdbIcdIUYx5kBd&export=download'> </a><BsDownload/> Resume</Button>
            </TextWrapper>
        </Section>
    )
}

export default AboutSec1
