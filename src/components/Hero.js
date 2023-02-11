import React from 'react'
import { Container, HeroInfo, HeroInfoRight, Img, ResumeLink, H3 } from '../styles/components/Hero.styles'
import profImg from '../assets/prof.png'

const Hero = () => {
  return (
    <Container>
      <HeroInfo>
        <Img src={profImg}/>
        <HeroInfoRight>
          <H3>Matt Higgins</H3>
          <h1 style={{"marginBottom": "10px", "marginTop": "10px"}}>Fullstack Web Developer</h1>
          <p>I build fullstack web apps using MERN</p>
          <p>mhiggins.louis@gmail.com</p>
          <ResumeLink href="resume.pdf" download="Matt's Resume">resume</ResumeLink>
        </HeroInfoRight>
      </HeroInfo>
    </Container>
  )
}

export default Hero