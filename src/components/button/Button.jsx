import React from 'react';

function Button(props) {
  return (
    <button className={`button ${props.outline ? 'button--outline' : ''}`}>{props.children}</button>
  );
}

export default Button;