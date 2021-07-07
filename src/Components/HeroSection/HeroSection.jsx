import React from 'react'
import {BiSearch} from 'react-icons/bi'
import { Button } from '../../globalstyles'
import {Link} from 'react-router-dom'
import { Content,HeroImg ,HeroContainer,TextWrapper,Title,Heading,ImgWrapper} from './HeroSecElementStyle'

const HeroSection = () => {
    return (
        <HeroContainer>
          <Content>
              <TextWrapper>
                  <Title>Web Designer/ Developer</Title>
                  <Heading>I make Your Business Looks great</Heading>
              </TextWrapper>
              <Link to='/work'><Button style={{margin:'auto'}} whileHover={{ scale: 1.1 }} ><BiSearch/> My work</Button></Link>
          </Content>
          <ImgWrapper  >
             <HeroImg />
             </ImgWrapper>
        </HeroContainer>
    )
}

export default HeroSection
