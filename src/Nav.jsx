import React from 'react';
import { NavLink } from 'react-router-dom';
import mbshull_logo from './img/mbshull_logo.png';

export const Nav = props => {
  let menuItems = props.menu.map((item, i) => <NavLink key={i} to={'/' + item}><li>{i !== props.menu.length - 1 ? `├─${item}` : `└─${item}`}</li></NavLink>)
  let logo = <img src={mbshull_logo} alt="mbshull" className="logo" />                                                
  return (
    <div>
      <NavLink key="logo" to='/'>{logo}</NavLink>
      <ul>
        <NavLink key={'home'} to='/'><li>.</li></NavLink>
        {menuItems}
      </ul>
    </div>
  )
}