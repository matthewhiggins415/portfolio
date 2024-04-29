import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  min-height: 50vh;
  margin: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h2 {
    margin-top: 50px;
    font-family: 'Nunito', sans-serif;
  }

  @media only screen and (max-width: 580px) {
    h2 {
      text-align: center;
    }
  }
`

export const ProjectsContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`

export const Project = styled.div`
  position: relative;
  display: flex;
  font-family: 'Nunito', sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  height: auto;
  width: 320px;
  margin: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  transition: 150ms ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  @media only screen and (max-width: 580px) {
    margin-top: 30px;
  }
`

export const Img = styled.img`
  height: 250px;
  width: 300px;
  border-radius: 5px;
  margin-bottom: 20px;
  object-fit: fill;
`

export const H4 = styled.h4`
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`
