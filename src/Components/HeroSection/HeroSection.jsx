import React from 'react'
import {BiSearch} from 'react-icons/bi'
import { Content,HeroImg ,HeroContainer,TextWrapper,Title,Heading,ImgWrapper,HeroButton} from './HeroSecElementStyle'

const HeroSection = () => {
    return (
        <HeroContainer>
          <Content>
              <TextWrapper>
                  <Title>Web Designer/ Developer</Title>
                  <Heading>I make Your Business Looks great</Heading>
              </TextWrapper>
              <HeroButton style={{margin:'auto'}}><BiSearch/> My work</HeroButton>
          </Content>
          <ImgWrapper>
             <HeroImg/>
             </ImgWrapper>
        </HeroContainer>
    )
}

export default HeroSection
