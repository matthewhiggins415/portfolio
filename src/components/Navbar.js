import React from 'react'
import { Container, NavbarContainer, LinkContainer, H2} from '../styles/components/Navbar.styles'

const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <H2>MH</H2>
        <LinkContainer>
          <p>Home</p>
          <p>About Me</p>
        </LinkContainer>
      </NavbarContainer>
    </Container>
  )
}

export default Navbar