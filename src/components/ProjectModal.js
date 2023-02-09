import React from 'react'
import { Container, ModalContainer, ModalHeader, Close, LinkContainer, Link } from '../styles/components/ProjectModal.styles'
import BounceLoader from "react-spinners/BounceLoader";


const ProjectModal = ({ selectedProject, setSelectedProject }) => {

  const handleRemoveSelected = () => {
    setSelectedProject({})
  }

  return (
    <Container>
      <ModalContainer>
        <ModalHeader>
          <h2>{selectedProject.name}</h2>
          <Close onClick={handleRemoveSelected}>&#10060;</Close>
        </ModalHeader>
        <div style={{position: "relative", "paddingBottom": "56.25%", height: "200px"}}>
          { selectedProject.video ? <iframe title="kakeibo demo"
            src={selectedProject.video} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", borderRadius: "10px"}}>
          </iframe> : <p>no video</p>}
        </div>
        <LinkContainer>
          <Link href={selectedProject.frontendRepo} target="_blank">Frontend Repo</Link>
          <Link href={selectedProject.backendRepo} target="_blank">Backend Repo</Link>
        </LinkContainer>
        <p>{selectedProject.description}</p>
      </ModalContainer>
    </Container>
  )
}

export default ProjectModal