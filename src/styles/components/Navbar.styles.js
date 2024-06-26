import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  padding: 20px;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const NavbarContainer = styled.div`
  min-width: 650px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background-color: transparent;

  @media only screen and (max-width: 680px) {
    min-width: 90%;
  }
`

export const H2 = styled.h2`
  font-family: 'Poppins', sans-serif;
`

export const LinkContainer = styled.div`
  display: flex;
  min-width: 150px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Nunito', sans-serif;
  background-color: transparent;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`