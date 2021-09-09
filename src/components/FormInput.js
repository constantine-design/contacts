import React from 'react';


export default function FormInput(props) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" style={{width:"7rem"}}>{props.text}</span>
      <input
        disabled={props.disabled}
        type="text"
        className={"form-control"+(props.checkInvalid?" border border-danger":"")}
        value={props.value || ''}
        onChange={props.onChange}
      />
    </div>
  );
}
