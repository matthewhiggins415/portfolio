import React from 'react'
import { Container, Img, ProjectsContainer, Project } from '../styles/components/Projects.styles'
import { projects } from '../projects'

const Projects = ({ selectedProject, setSelectedProject }) => {

  const handleSelect = (project) => {
    setSelectedProject(project)
  }

  return (
    <Container>
      <h1>Projects</h1>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project key={project._id} onClick={() => handleSelect(project)}>
            <Img src={project.img} alt="landing page of deployed project."/>
            <h4>{project.name}</h4>
          </Project>
        ))}
      </ProjectsContainer>
    </Container>
  )
}

export default Projects