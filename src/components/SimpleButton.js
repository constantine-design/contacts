import React from 'react';


export default function SimpleButton(props) {
  return (
    <button
      disabled={props.disabled}
      className="btn btn-sm btn-outline-secondary me-2"
      onClick={props.onClick}
    >
      {props.name}{props.children}
    </button>
  );
}
