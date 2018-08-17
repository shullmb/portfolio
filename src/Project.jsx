import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';


library.add(fab,faWindowRestore);

export const Project = props => {

  return (
    <div className="project">
      <div className="proj_info">
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
        <a className="btn proj-btn" target="_blank" href={props.gh}> 
          <FontAwesomeIcon icon={['fab', 'github-alt']} />&nbsp;&nbsp;Github </a>
        <a className="btn proj-btn" target="_blank" href={props.live}>
          <FontAwesomeIcon icon={'window-restore'} />&nbsp;&nbsp;Live </a>
      </div>
      <img src={require(`./img/${props.img}`)} alt={props.title} />
    </div>
  )
}