import React, { useState } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import ProjectModal from '../components/ProjectModal'
import { HomeScreenContainer } from '../styles/screens/HomeScreen.styles';
import Skills from '../components/Skills';

const HomeScreen = () => {
  const [selectedProject, setSelectedProject] = useState({})

  return (
    <>
      {Object.keys(selectedProject).length > 0 ? <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject}/> : null}
      <HomeScreenContainer>
        <Hero />
        <Projects setSelectedProject={setSelectedProject}/>
        <Skills />
      </HomeScreenContainer>
    </>
  )
}

export default HomeScreen