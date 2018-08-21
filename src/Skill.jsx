import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Skill = props => {
  return (
    <div className="skill">
      <FontAwesomeIcon icon={props.icon} size='6x' />
      <h4>{props.skill}</h4>
    </div>
  )
}