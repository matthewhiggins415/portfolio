import styled from "styled-components";

export const Container = styled.div`
  background-color: orange;
  min-height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const ProjectsContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-evenly;
`

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  height: 240px;
`

export const Img = styled.img`
  height: auto;
  width: 200px;
  object-fit: contain;
  border-radius: 5px;
  border: 1px solid black;
`