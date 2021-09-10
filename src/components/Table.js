import React from 'react';
import SimpleButton from './SimpleButton.js'
import TableRow from './TableRow.js'

export default function Table(props) {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-bordered" style={{fontSize:"0.7rem"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { props.contacts.map(contact=>
              <TableRow
                key={contact.id}
                contact={contact}
                deleteContact={props.deleteContact}
                writeForm={props.writeForm}
                cleanForm={props.cleanForm}
              />
            )}
          </tbody>
        </table>
      </div>
      <div className="text-end">
        <SimpleButton
          name="Add New 🞡"
          onClick={()=>props.writeForm({"name":"","phone":"","email":""})}
        />
      </div>
    </>
  )
}
