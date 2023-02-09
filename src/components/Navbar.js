import React from 'react'
import { Container, LinkContainer} from '../styles/components/Navbar.styles'

const Navbar = () => {
  return (
    <Container>
      <h2>MH</h2>
      <LinkContainer>
        <p>Home</p>
        <p>About</p>
      </LinkContainer>
    </Container>
  )
}

export default Navbar