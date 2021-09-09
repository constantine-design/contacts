import React, { useEffect } from 'react';
import './App.css';
import { fetchContacts, newContact, deleteContact, updateContact } from './store/actions';
import { connect } from 'react-redux';
import Table from './components/Table.js'

function App(props) {

  useEffect(() => {
    props.fetchContacts();
  }, []);
  console.log(props.contacts);

  return (
    <div className="App container py-5">
      <h1 className="text-center"> TEST </h1>
      <Table
        contacts={props.contacts}
        newContact={props.newContact}
        deleteContact={props.deleteContact}
        updateContact={props.updateContact}
      />
    </div>
  );
}

export default connect(
  (state) => ({
    contacts: state.contacts,
  }),
  { fetchContacts, newContact, deleteContact, updateContact }
)(App);
