import React, { useState } from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import ProjectModal from '../components/ProjectModal'

const HomeScreen = () => {
  const [selectedProject, setSelectedProject] = useState({})

  return (
    <>
      {Object.keys(selectedProject).length > 0 ? <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject}/> : null}
      <div>
        <Hero />
        <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
      </div>
    </>
  )
}

export default HomeScreen