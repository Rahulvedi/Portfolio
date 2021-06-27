import React from 'react'
import { FooterBox,Info,TextWrapper,SocialIcons,Github,Instagram,Twitter,Name,Email,Copyright} from './FooterElementStyle'

const Footer = () => {
    return (
       <FooterBox>
         <Info>
         <TextWrapper>
              <Name>Rahul Vedi</Name>
              <Email>rahul.v7800@gmail.com</Email>
          </TextWrapper>
          <SocialIcons>
              <Github/>
              <Instagram/>
              <Twitter/>
          </SocialIcons>
         </Info>
          <Copyright>© 2020 copyright all right reserved</Copyright>
       </FooterBox>
    )
}

export default Footer
