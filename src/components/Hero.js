import React from 'react'
import { Container, HeroInfo, HeroInfoRight, Img, ResumeLink, H3, SocialContainer, SocialLink, H1 } from '../styles/components/Hero.styles'
import profImg from '../assets/prof.png'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <Container>
      <HeroInfo>
        <Img src={profImg}/>
        <HeroInfoRight>
          <H3>Matt Higgins</H3>
          <H1>Fullstack Web Developer</H1>
          <p>I build fullstack web apps using MERN</p>
          <p>mhiggins.louis@gmail.com</p>
          <ResumeLink href="resume.pdf" download="Matt's Resume">resume</ResumeLink>
        </HeroInfoRight>
      </HeroInfo>
      <SocialContainer>
        <SocialLink 
          href="https://github.com/matthewhiggins415" 
          target="_blank">
          <FiGithub />
        </SocialLink>
        <SocialLink 
          href="https://www.linkedin.com/in/mhiggie/" 
          target="_blank">
          <FaLinkedin />
        </SocialLink>
      </SocialContainer>
    </Container>
  )
}

export default Hero