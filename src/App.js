import React, { useEffect } from 'react';
import './App.css';
import { fetchContacts } from './store/actions';
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
      />
    </div>
  );
}

export default connect(
  (state) => ({
    contacts: state.contacts,
  }),
  { fetchContacts }
)(App);
