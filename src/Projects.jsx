import React from 'react';
import { Project } from './Project';
import data from './data/projects.json';

const Projects = props => {
  let projects = data.map( (project, i) => {
    return (
      <Project title={project.title} 
               summary={project.summary} 
               img={project.img} 
               gh={project.gh}
               live={project.live}
               key={project.title+i} />
    )
  })
  return (
    <div id="projects">
      {projects}
    </div>
  )
}

export default Projects;