import React from 'react'
import { Container, NavbarContainer, LinkContainer, H2, NavLink } from '../styles/components/Navbar.styles'

const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <H2>Matt Higgins</H2>
        <LinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
        </LinkContainer>
      </NavbarContainer>
    </Container>
  )
}

export default Navbar