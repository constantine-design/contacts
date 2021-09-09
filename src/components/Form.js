import React, { useState } from 'react';
import FormInput from './FormInput.js';
import SimpleButton from './SimpleButton.js'


export default function Form(props) {
  const smartSave = () => {
    if (props.form.id) props.updateContact(props.form);
    else props.newContact(props.form);
    props.cleanForm();
  }
  function nameValidation(text) {
    return !text.trim();
  }
  function phoneValidation(phone) {
    return !(phone && /^[0-9]*$/.test(phone));
  }
  function emailValidation(mail) {
    return !(/(.+)@(.+){2,}\.(.+){2,}/.test(mail));
  }
  var a = [
    nameValidation(props.form.name),
    phoneValidation(props.form.phone),
    emailValidation(props.form.email)
  ]
  console.log(a);console.log(a.every(a=>a===false));
  return (
    <div className="bg-light rounded p-4 border">
      <h2 className="text-secondary mt-3">{props.form.id?"Edit":"Create"} Item</h2>
      <form className="my-4" onSubmit={e=>e.preventDefault()}>
        <FormInput
          disabled
          text="ID"
          value={props.form.id}
          onChange={(e)=>props.writeForm({ ...props.form, name: e.target.id })}
        />
        <FormInput
          text="Name"
          checkInvalid={nameValidation(props.form.name)}
          value={props.form.name}
          onChange={(e)=>props.writeForm({ ...props.form, name: e.target.value })}
        />
        <FormInput
          text="Phone"
          checkInvalid={phoneValidation(props.form.phone)}
          value={props.form.phone}
          onChange={(e)=>props.writeForm({ ...props.form, phone: e.target.value })}
        />
        <FormInput
          text="Mail"
          checkInvalid={emailValidation(props.form.email)}
          value={props.form.email}
          onChange={(e)=>props.writeForm({ ...props.form, email: e.target.value })}
        />
        <div className="text-end my-4">
          <SimpleButton
            isRed
            checkDisabled={a}
            name={props.form.id?"Save":"Create"}
            onClick={smartSave}
          />
          <SimpleButton
            name="Cancel"
            onClick={()=>props.cleanForm()}
          />
        </div>
      </form>
    </div>
  );
}
