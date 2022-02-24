import React from 'react';
import classNames from 'classnames';

function Button({ onClick, className, outline, children }) {
  return (
    // <button className={`button ${props.outline ? 'button--outline' : ''}`}>{props.children}</button>
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
        // 'button--test': props.test,
      })}>
      {children}
    </button>
  );
}

export default Button;
