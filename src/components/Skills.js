import React from 'react';
import { Container, SkillsContainer, H2 } from '../styles/components/Skills.styles';
import SkillCard from './SkillCard';
import { skills } from '../skills';

const Skills = () => {
  return (
    <Container>
      <H2>Technologies I enjoy using</H2>
      <SkillsContainer>
        {skills.map((skill) => (
          <SkillCard id={skill._id} skill={skill} />
        ))}
      </SkillsContainer>
    </Container>
  )
}

export default Skills