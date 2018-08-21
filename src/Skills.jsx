import React from 'react';
import { Skill } from './Skill';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGem, faAlignRight, faCloud } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import data from './data/skills.json';

library.add(fab, faGem, faAlignRight, faCloud)

export const Skills = props => {
  const skills = data.map( (skill, i) => {
    let icon = skill.set === 'fab' ? [skill.set, skill.icon] : skill.icon
    return (
      <Skill key={`${skill.skill}${i}`}skill={skill.skill} icon={icon} />
    )
  })
  return (
    <div>
      {skills}
    </div>
  )
}