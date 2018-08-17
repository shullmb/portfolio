import React from 'react';

const NotFound = props => {
  props.history.push('/');

  return (
    <div>
      <h1>Oops, looks like there's nothing here...</h1>
      <p>please make your way back to safety</p>
    </div>
  )
}

export default NotFound;