import React from 'react'
import { Container, LinkContainer, H2} from '../styles/components/Navbar.styles'

const Navbar = () => {
  return (
    <Container>
      <H2>MH</H2>
      <LinkContainer>
        <p>Home</p>
        <p>About Me</p>
      </LinkContainer>
    </Container>
  )
}

export default Navbar