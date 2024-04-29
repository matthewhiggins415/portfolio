import React from 'react'
import { Container, HeroInfo, HeroInfoRight, Img, ResumeLink, SocialContainer, SocialLink, H1 } from '../styles/components/Hero.styles'
import profImg from '../assets/prof.png'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <Container>
      <HeroInfo>
        <Img src={profImg}/>
        <HeroInfoRight>
          <H1>Fullstack Developer</H1>
          <p>I enjoy finding creative solutions to problems!</p>
          <p>mhiggins.louis@gmail.com</p>
          <SocialContainer>
            <ResumeLink href="2024resume.pdf" download="Matt's Resume">resume</ResumeLink>
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
        </HeroInfoRight>
      </HeroInfo>
    </Container>
  )
}

export default Hero