import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGem, faAlignRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import data from './data/skills.json';

library.add(fab, faGem, faAlignRight)

export const Skills = props => {
  const skills = data.map( (skill, i) => {
    let icon = skill.set === 'fab' ? [skill.set, skill.icon] : skill.icon
    return (
      <div className="skill">
        <FontAwesomeIcon icon={icon} size='6x' />
        <h4>{skill.skill}</h4>
      </div>
    )
  })
  return (
    <div>
      {skills}
    </div>
  )
}