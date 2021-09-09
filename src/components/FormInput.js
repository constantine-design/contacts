import React from 'react';


export default function FormInput(props) {
  return (
    <input
      disabled={props.disabled}
      type="text"
      className="form-control"
      value={props.value || ''}
      onChange={props.onChange}
    />
  );
}
