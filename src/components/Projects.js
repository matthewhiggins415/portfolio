import React from 'react'
import { Container, Img, ProjectsContainer, Project, Span, H4} from '../styles/components/Projects.styles'
import { projects } from '../projects'

const Projects = ({ setSelectedProject }) => {

  const handleSelect = (project) => {
    setSelectedProject(project)
  }

  return (
    <Container>
      <h2>My Recent Projects <br></br> (click for details)</h2>
      <ProjectsContainer>
        {projects.map((project) => (
          <Project key={project._id} onClick={() => handleSelect(project)}>
            <Img src={project.img} alt="landing page of deployed project."/>
            <H4>{project.name}</H4>
            <p>{project.shortDescription}</p>
          </Project>
        ))}
      </ProjectsContainer>
    </Container>
  )
}

export default Projects