import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export const Header = props => {
  return (
    <header>
      <h1>Michael Shull
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/shullmb/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} color='#111' size='1x' pull='right' /> </a>
            <a rel="noopener noreferrer" href="https://www.freecodecamp.org/shullmb" target="_blank"><FontAwesomeIcon icon={['fab', 'free-code-camp']} color='#111' size='1x' pull='right' /> </a>
            <a rel="noopener noreferrer" href="https://github.com/shullmb" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} color='#111' size='1x' pull='right' /> </a>
      </h1>
    </header>
  )
}