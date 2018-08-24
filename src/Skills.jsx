import React from 'react';
import { Skill } from './Skill';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGem,
         faAlignRight,
         faBold,
         faCloud,
         faAsterisk,
         faSpaceShuttle,
         faRuler,
         faIndent, 
         faDollarSign, 
         faServer} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import data from './data/skills.json';

library.add(fab, faGem, faAlignRight, faBold, faCloud, faAsterisk, faSpaceShuttle, faRuler, faIndent, faDollarSign, faServer)

export const Skills = props => {
  const skills = data.map( (skill, i) => {
    let icon = skill.set === 'fab' ? [skill.set, skill.icon] : skill.icon
    if ( !skill.lib && !skill.tool ) {
      return (
        <Skill key={`${skill.skill}${i}`}skill={skill.skill} icon={icon} size={6} />
      )
    }
  })
  const tools = data.map((skill, i) => {
    let icon = skill.set === 'fab' ? [skill.set, skill.icon] : skill.icon
    if (skill.tool) {
      return (
        <Skill key={`${skill.skill}${i}`} skill={skill.skill} icon={icon} size={4} />
      )
    }
  })
  const libraries = data.map((skill, i) => {
    let icon = skill.set === 'fab' ? [skill.set, skill.icon] : skill.icon
    if (skill.lib) {
      return (
        <Skill key={`${skill.skill}${i}`} skill={skill.skill} icon={icon} size={4} />
      )
    }
  })

  return (
    <div>
      <h2>The following represents tech and tools that I am currently comfortable with or have used extensively in the past.</h2>
      {skills}
      <h3>libraries and frameworks:</h3>
      {libraries}
      <h3>tools:</h3>
      {tools}
    </div>
  )
}