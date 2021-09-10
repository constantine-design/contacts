import React, { useEffect } from 'react';
import { fetchContacts, newContact, deleteContact, updateContact, writeForm, cleanForm } from '../store/actions';
import { connect } from 'react-redux';
import Table from '../components/Table.js'
import Form from '../components/Form.js'

function Contacts(props) {

  useEffect(() => {
    props.fetchContacts();
  }, []);

  return (
    <div className="App container mb-3">
      <h1 className="text-center text-secondary display-1 mb-5"> Contacts </h1>
      <div className="row justify-content-center">
        <div className="col-lg-8 mb-3">
          <Table
            contacts={props.contacts}
            newContact={props.newContact}
            deleteContact={props.deleteContact}
            updateContact={props.updateContact}
            writeForm={props.writeForm}
            cleanForm={props.cleanForm}
          />
        </div>
        <div className="col-sm-8 col-lg-4 mb-3">
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
      </div>
    </div>
  );
}

export default connect(
  (state) => ({ contacts: state.contacts, form: state.form }),
  { fetchContacts, newContact, deleteContact, updateContact, writeForm, cleanForm }
)(Contacts);
