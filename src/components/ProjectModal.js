import React from 'react'
import { Container, ModalContainer, ModalHeader, Close, LinkContainer, Link, P } from '../styles/components/ProjectModal.styles'


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
          <iframe title="kakeibo demo"
            src={selectedProject.video} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", borderRadius: "10px"}}>
          </iframe>
        </div>
        <LinkContainer>
          <Link href={selectedProject.frontendRepo} target="_blank">Frontend Repo</Link>
          <Link href={selectedProject.backendRepo} target="_blank">Backend Repo</Link>
        </LinkContainer>
        <P>{selectedProject.description}</P>
      </ModalContainer>
    </Container>
  )
}

export default ProjectModal