import React from 'react'
import { Section, ImgWrapper, AboutImg, TextWrapper, Text } from './AboutSecElementStyle'
import { Button } from '../../globalstyles'
import { BsDownload } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const AboutSec1 = () => {
    return (
        <Section>
            <ImgWrapper>
                <AboutImg />
            </ImgWrapper>
            <TextWrapper>
                <Text>I am a web developer from India,Rajasthan  and currently living in sikar.I enjoy  building everything from small business sites to rich interactive web apps.If you are a business seaking a web presence or a employer looking to hire,you can get in touch with me here.</Text>
                <a style={{color:'white'}} href='https://drive.google.com/u/0/uc?id=1Id5FUN-u7tIilJ69t2AdbIcdIUYx5kBd&export=download'> <Button><BsDownload style={{marginRight:'.5rem'}}/>Resume</Button></a>
            </TextWrapper>
        </Section>
    )
}
export default AboutSec1
