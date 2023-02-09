import React from 'react'
import { Container, HeroInfo, HeroInfoRight, Img } from '../styles/components/Hero.styles'
import profImg from '../assets/prof.png'

const Hero = () => {
  return (
    <Container>
      <HeroInfo>
        <Img src={profImg}/>
        <HeroInfoRight>
          <h3>Matt Higgins</h3>
          <h2>Fullstack Web Developer</h2>
          <p>I like building fullstack web apps using MERN stack.</p>
          <button>Resume</button>
        </HeroInfoRight>
      </HeroInfo>
    </Container>
  )
}

export default Hero