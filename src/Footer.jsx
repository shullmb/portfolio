import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart);

export const Footer = props => {
  return (
    <footer><p>built with <FontAwesomeIcon icon={'heart'} /> and <FontAwesomeIcon icon={['fab', 'react']} /> | i'm a developer not a designer | &copy; 2018 mbshull </p></footer>
  )
}
