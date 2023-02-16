import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  width: 250px;
  height: auto;
  border-radius: 10px;
`

export const P = styled.p`
  font-size: 20px;
  letter-spacing: 1.2px;
  margin: 15px;

  @media only screen and (max-width: 680px) {
    text-align: center;
  }
`