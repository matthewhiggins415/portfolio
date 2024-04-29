import React from 'react';
import { Container, P, H2 } from '../styles/components/SkillCard.styles';
import { iconMap } from '../skillsIcons';

const SkillCard = ({ skill }) => {
  const IconComponent = iconMap[skill.name];

  return (
    <Container>
      {IconComponent && <IconComponent size={120} color={skill.color} />}
      <H2>{skill.name}</H2>
      <P>{skill.description}</P>
    </Container>
  )
}

export default SkillCard