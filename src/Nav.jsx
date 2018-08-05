import React from 'react';

export const Nav = props => {
let menuItems = props.menu.map((item, i) => <li key={i}><a href="/{item}">&nbsp;&nbsp;{ i !== props.menu.length - 1 ? `├─${item}` : `└─${item}`}</a></li>)
                                                
  return (
    <div>
      <ul>
        <li ><a href="/">./mbshull</a></li>
        {menuItems}
      </ul>
    </div>
  )
}