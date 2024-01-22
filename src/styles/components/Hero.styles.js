import styled from "styled-components";

export const Container = styled.div`
  background-color: #21262d;
  min-height: 50vh;
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const H3 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  letter-spacing: 1.2px;
`

export const H1 = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;

  @media only screen and (max-width: 580px) {
    text-align: center;
  }
`

export const HeroInfo = styled.div`
  display: flex;
  padding: 20px;
  background-color: transparent;
  min-width: 650px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 580px) {
    flex-direction: column;
    min-width: auto;
    width: auto;
  }
`

export const HeroInfoRight = styled.div`
  width: 60%;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: #F3F4F6;
  background-color: transparent;
  font-family: 'Nunito', sans-serif;

  @media only screen and (max-width: 580px) {
    align-items: center;
    padding-top: 15px;
    text-align: center;
  }

  p {
    margin-bottom: 15px;
  }
`

export const Img = styled.img`
  min-width: 300px;
  height: 300px;
  object-fit: contain;
  margin-right: 30px;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  @media only screen and (max-width: 580px) {
    min-width: 80%;
    margin: 0 auto;
  }
`

export const ResumeLink = styled.a`
  padding: 8px 25px; 
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  background-color: #36395a;
  border-radius: 10px;
  cursor: pointer;
  transition: 150ms ease-in-out;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 1.1px;
  margin-top: 20px;
  text-decoration: none;

  :hover {
    background-color: #F3F4F6;
    color: #21262d;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  width: auto;
  min-width: 150px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 20px auto;

  @media only screen and (max-width: 580px) {
    margin-top: 80px;
  }
`

export const SocialLink = styled.a`
  color: black;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 25px;
  color: white;
`