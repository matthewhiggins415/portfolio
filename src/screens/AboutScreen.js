import React from 'react'
import motorcycleImage from '../assets/motorcycle.jpg'
import { Container, AboutContainer, Img, P } from '../styles/screens/AboutScreen.styles'

const AboutScreen = () => {
  return (
    <Container>
      <AboutContainer>
        <Img src={motorcycleImage} alt="about me image"/>
        <P>Web development is very special to me because it is a skill I build every day and I can take it anywhere. </P>
      </AboutContainer>
    </Container>
  )
}

export default AboutScreen