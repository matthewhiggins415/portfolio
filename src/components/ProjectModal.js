import React from 'react'
import { projects } from '../projects'
import { Container, ModalContainer, ModalHeader, Close } from '../styles/components/ProjectModal.styles'

const ProjectModal = ({ selectedProject, setSelectedProject }) => {

  const handleRemoveSelected = () => {
    setSelectedProject({})
  }

  return (
    <Container>
      <ModalContainer>
        <ModalHeader>
          <h2>{selectedProject.name}</h2>
          <Close onClick={handleRemoveSelected}>X</Close>
        </ModalHeader>
        <p>{selectedProject.description}</p>
      </ModalContainer>
    </Container>
  )
}

export default ProjectModal