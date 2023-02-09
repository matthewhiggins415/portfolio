import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
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
  border-radius: 10px;
  padding: 10px;
  height: 240px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

export const Img = styled.img`
  height: auto;
  width: 200px;
  object-fit: contain;
  border-radius: 5px;
`