import React from 'react'
import { Container, HeroInfo, HeroInfoRight, Img, ResumeBtn, H3} from '../styles/components/Hero.styles'
import profImg from '../assets/prof.png'

const Hero = () => {
  return (
    <Container>
      <HeroInfo>
        <Img src={profImg}/>
        <HeroInfoRight>
          <H3>Matt Higgins</H3>
          <h1 style={{"margin-bottom": "10px", "margin-top": "10px"}}>Fullstack Web Developer</h1>
          <p>I build fullstack web apps using MERN</p>
          <p>mhiggins.louis@gmail.com</p>
          <ResumeBtn>resume</ResumeBtn>
        </HeroInfoRight>
      </HeroInfo>
    </Container>
  )
}

export default Hero