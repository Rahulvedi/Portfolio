import React from 'react'
import {BiSearch} from 'react-icons/bi'
import { Button } from '../../globalstyles'
import { Content,HeroImg ,HeroContainer,TextWrapper,Title,Heading,ImgWrapper} from './HeroSecElementStyle'

const HeroSection = () => {
    return (
        <HeroContainer>
          <Content>
              <TextWrapper>
                  <Title>Web Designer/ Developer</Title>
                  <Heading>I make Your Business Looks great</Heading>
              </TextWrapper>
              <Button style={{margin:'auto'}}><BiSearch/> My work</Button>
          </Content>
          <ImgWrapper>
             <HeroImg/>
             </ImgWrapper>
        </HeroContainer>
    )
}

export default HeroSection
