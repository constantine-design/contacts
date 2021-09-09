import React, { useEffect } from 'react';
import './App.css';
import { fetchContacts, newContact, deleteContact, updateContact, writeForm, cleanForm } from './store/actions';
import { connect } from 'react-redux';
import Table from './components/Table.js'
import Form from './components/Form.js'

function App(props) {

  useEffect(() => {
    props.fetchContacts();
  }, []);
  console.log(props.form);
  console.log(Object.keys(props.form).length);

  return (
    <div className="App container py-5">
      <h1 className="text-center"> TEST </h1>
      <Table
        contacts={props.contacts}
        newContact={props.newContact}
        deleteContact={props.deleteContact}
        updateContact={props.updateContact}
        writeForm={props.writeForm}
      />
      { Object.keys(props.form).length>0 &&
        <Form
          form={props.form}
          contacts={props.contacts}
          updateContact={props.updateContact}
          newContact={props.newContact}
          writeForm={props.writeForm}
          cleanForm={props.cleanForm}
        />
      }
    </div>
  );
}

export default connect(
  (state) => ({ contacts: state.contacts, form: state.form }),
  { fetchContacts, newContact, deleteContact, updateContact, writeForm, cleanForm }
)(App);
