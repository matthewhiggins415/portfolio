import styled from "styled-components";

export const Container = styled.div`
  background-color: #21262d;
  min-height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroInfo = styled.div`
  display: flex;
  padding: 20px;
  background-color: transparent;
  min-width: 650px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 350px) {
    flex-direction: column;
  }
`

export const HeroInfoRight = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: #F3F4F6;
  background-color: transparent;
`

export const Img = styled.img`
  min-width: 350px;
  height: 300px;
  object-fit: cover;
  border-bottom: 2px dotted lightblue;
  background-color: transparent;
`