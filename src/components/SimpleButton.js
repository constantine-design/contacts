import React from 'react';


export default function SimpleButton(props) {
  return (
    <button
      disabled={props.checkDisabled}
      className={ "btn btn-sm mx-1"+(props.isRed?" btn-outline-danger":" btn-outline-secondary") }
      onClick={props.onClick}
      title={ props.children ? props.name : "" }
    >
      { props.children ? props.children : props.name }
    </button>
  );
}
