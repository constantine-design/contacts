import React from 'react';
import FormInput from './FormInput.js';
import SimpleButton from './SimpleButton.js'


export default function Form(props) {
  const smartSave = () => {
    if (props.form.id) props.updateContact(props.form);
    else props.newContact(props.form);
    props.cleanForm();
  }
  return (
    <form className="my-5" onSubmit={e=>e.preventDefault()}>
      <FormInput
        disabled
        value={props.form.id}
        onChange={(e)=>props.writeForm({ ...props.form, name: e.target.id })}
      />
      <FormInput
        value={props.form.name}
        onChange={(e)=>props.writeForm({ ...props.form, name: e.target.value })}
      />
      <FormInput
        value={props.form.phone}
        onChange={(e)=>props.writeForm({ ...props.form, phone: e.target.value })}
      />
      <FormInput
        value={props.form.email}
        onChange={(e)=>props.writeForm({ ...props.form, email: e.target.value })}
      />
      <div>
        <SimpleButton
          name="Save"
          onClick={smartSave}
        />
        <SimpleButton
          name="Cancel"
          onClick={()=>props.cleanForm()}
        />
      </div>
    </form>
  );
}
